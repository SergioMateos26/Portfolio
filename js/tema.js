const toggleButton = document.getElementById('toggle-theme');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
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
        root.style.setProperty('--color-active', '#000000');

        root.style.setProperty('--scrollbar-track-color', '#f0f0f0');
        root.style.setProperty('--scrollbar-thumb-color', '#c0c0c0');
        root.style.setProperty('--scrollbar-thumb-hover-color', '#a0a0a0');

        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';

        temaActual = 'claro';
    } else {
        root.style.setProperty('--color-body', 'rgb(8, 9, 23)');
        root.style.setProperty('--color-fondo', '#181818');
        root.style.setProperty('--color-borde', '#333333');
        root.style.setProperty('--color-borde-top', '#ededed20');
        root.style.setProperty('--color-sombra', '#02020293');
        root.style.setProperty('--color-texto', 'rgb(214, 211, 209, 1)');
        root.style.setProperty('--color-fondo-brillo', '#EDEDED');
        root.style.setProperty('--color-brillo', 'hsl(0, 0%, 100%, 0.056)');
        root.style.setProperty('--color-active', '#ffffff');

        root.style.setProperty('--scrollbar-track-color', '#333');
        root.style.setProperty('--scrollbar-thumb-color', '#666');
        root.style.setProperty('--scrollbar-thumb-hover-color', '#999');

        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';

        temaActual = 'oscuro';
    }
}
