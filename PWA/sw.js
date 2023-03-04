self.addEventListener('install', event => {
    console.log('SW Instal');
})

self.addEventListener('activate', event => {
    console.log('SW activate');
})