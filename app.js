if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
            console.log('Service worker registrado con éxito:', registration);  // Agregada la coma aquí
        })
        .catch(function(error) {
            console.log('Error al registrar Service worker:', error);  // Agregada la coma aquí
        });
}
