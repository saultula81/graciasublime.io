const CACHE_NAME = 'gracia-sublime-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',  // si tu archivo principal no es index.html cambia este nombre
  '/manifest.json',
  '/logo.jpg',
  '/icon-192.png',
  '/icon-512.png',
  // aquí puedes agregar más recursos estáticos que quieras cachear
];

// Instalación: cachear los archivos listados
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activación: borrar caches antiguos si fuera necesario
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: responder con cache o hacer fetch normalmente
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
