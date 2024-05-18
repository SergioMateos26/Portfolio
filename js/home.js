document.getElementById('homeButton').addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    const duration = 1000; // Duración total del rebote (en milisegundos)
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
        const elapsed = 'now' in window.performance ? performance.now() - startTime : new Date().getTime() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Función de facilidad para simular un rebote
        window.scrollTo(0, start * (1 - easeProgress));

        if (progress < 1) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);
}
