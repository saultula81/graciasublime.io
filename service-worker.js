self.addEventListener('install', function (e) {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (event) {
  // Deja pasar las solicitudes normales
});
