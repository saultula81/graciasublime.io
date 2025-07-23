self.addEventListener('install', e => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', e => {
  // Puede manejar cache aquí si lo deseas
});
