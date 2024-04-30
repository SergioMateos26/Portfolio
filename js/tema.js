const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', toggleTema);

let temaActual = 'oscuro';

function toggleTema() {
    const root = document.documentElement;
    if (temaActual === 'oscuro') {
        root.style.setProperty('--color-body', '#FAFAFA');
        root.style.setProperty('--color-fondo', '#FFFFFF');
        root.style.setProperty('--color-borde', '#E0E0E0');
        root.style.setProperty('--color-borde-top', '#12121220');
        root.style.setProperty('--color-sombra', '#0000004D');
        root.style.setProperty('--color-texto', '#444444');
        root.style.setProperty('--color-fondo-brillo', '##5957571f');
        root.style.setProperty('--color-brillo', '#5957572b');

        temaActual = 'claro';
    } else {
        root.style.setProperty('--color-body', '#161616');
        root.style.setProperty('--color-fondo', '#181818');
        root.style.setProperty('--color-borde', '#333333');
        root.style.setProperty('--color-borde-top', '#ededed20');
        root.style.setProperty('--color-sombra', '#02020293');
        root.style.setProperty('--color-texto', '#A0A0A0');
        root.style.setProperty('--color-fondo-brillo', '#EDEDED');
        root.style.setProperty('--color-brillo', 'hsl(0, 0%, 100%, 0.056)');
        temaActual = 'oscuro';
    }
}
