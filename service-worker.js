self.addEventListener('install', event => {
  console.log('Service worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activado');
});

self.addEventListener('fetch', function(event) {
  // No hacer nada especial, solo permitir modo offline básico si querés.
});
