const cacheName = 'todo-cache-v1';
const assets = [
    '/',                   // Página de inicio
    '/index.html',         // Archivo HTML principal
    '/app.js',             // Archivo JavaScript principal
    '/manifest.json', 
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'    // Archivo de manifest de la aplicación
];

// Evento de instalación: ocurre la primera vez que el Service Worker se registra
self.addEventListener('install', event => {
    // Espera hasta que todos los archivos estén en caché antes de completar la instalación
    e.waitUntil(
        caches.open(cacheName) // Abre (o crea) el caché con el nombre especificado
            .then(cache => {

                  console.log('abriendo caché');
                 return cache.addAll(urlsToCache);
                  
            })
    );
});

// Evento de activación: se ejecuta después de que el SW se instala y toma el control de la aplicación
self.addEventListener('activate', event => {
     console.log('Service worker activado');
});

self.addEventListener('fetch', event => {
    event.responseWith(
        caches.match(event.request)
        .then(response => {
                return response || fetch(event.request);
            })
    );
});
