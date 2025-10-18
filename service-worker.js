self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tiktok-coins-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './tiktok.png',
        './coin.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
