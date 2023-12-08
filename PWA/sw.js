// Push notifications
importScripts("https://lightxlamp.pushengage.com/service-worker.js?ver=2.3.0");
// importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

// Main Part
const staticCacheName = "s-app-v3"
const dynamicCacheName = "d-app-v1"

const assetURLs = [
    'index.html',
    'js/app.js',
    'css/styles.css',
    'offline.html',
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
            .filter(name => name !== dynamicCacheName)
            .map(name => caches.delete(name))
    )
})

// Invokes when app make any call for some file (styles.css, app.js) etc
self.addEventListener('fetch', event => {
    const { request } = event
    console.log('= Fetch:', request.url);
    const url = new URL(request.url)

    // Trying to get data from server where the app is located
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    }
    else {
        event.respondWith(networkFirst(request))
    }


})

async function cacheFirst(request) {
    const cached = await caches.match(request) // Checks if cache has data that we've just required 
    return cached ?? await fetch(request) // Return cached files. Or if they are missing. Perform a request.
}

async function networkFirst(request) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(request);
        await cache.put(request, response.clone()); // Put to cache with "key" - "request". some response data
        return response
    } catch (error) {
        // If we are disconnected and can't fetch data from server
        // console.error(error);
        const cachedResponse = await cache.match(request)
        return cachedResponse ?? await cache.match('/offline.html')
    }
}
