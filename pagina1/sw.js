self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/paginas/inicio.html',
                '/paginas/ejemplo1.html',
                '/paginas/listavideos.html',
                '/paginas/perfil.html',
                '/css/estiloIndex.css',
                '/css/estiloMenu.css'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
