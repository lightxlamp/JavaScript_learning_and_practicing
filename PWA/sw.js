const staticCacheName = "s-app-v3"

const assetURLs = [
    'index.html',
    'js/app.js',
    'css/styles.css'
]

// self.addEventListener('install', event => {
//     console.log('SW Install');
//     event.waitUntil(
//         caches.open(staticCacheName).then(cache => cache.addAll(assetURLs))
//     )
// })


// Older approach but easier to read
self.addEventListener('install', async event => {
    console.log('SW Install');
    const cache = await caches.open(staticCacheName);
    cache.addAll(assetURLs)
})

// Cleaning previous cache versions
self.addEventListener('activate', async event => {
    console.log('SW activate');
    const cacheNames = await caches.keys();
    console.log('cacheNames', cacheNames);
    await Promise.all(
        cacheNames
            .filter(name => name !== staticCacheName)
            .map(name => caches.delete(name))
    )
})

// Invokes when app make any call for some file (styles.css, app.js) etc
self.addEventListener('fetch', event => {
    console.log('= Fetch:', event.request.url);

    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
    const cached = await caches.match(request) // Checks if cache has data that we've just required 
    return cached ?? await fetch(request) // Return cached files. Or if they are missing. Perform a request.
}