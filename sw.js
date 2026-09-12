// Service Worker: Trắc Nghiệm Vật Lí THPT - Thầy Trần Mạnh Tùng
const CACHE_NAME = 'vatli-thpt-cache-v1';

// Pre-cache core application shell
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './lop10/',
  './lop10/index.html',
  './lop11/',
  './lop11/index.html',
  './lop12/',
  './lop12/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('SW Pre-cache notice:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Stale-while-revalidate strategy: serve from cache immediately, then update cache in background
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(err => {
        // Network failed (offline), return cached response if available
        return cachedResponse;
      });

      // Return cached version immediately if present, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
