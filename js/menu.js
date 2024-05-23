// Función que se ejecuta cuando se carga la ventana
window.onload = function () {
    // Obtener el botón Home y activarlo
    var homeButton = document.querySelector('.botones:nth-child(4)');
    toggleActive(homeButton);
};

// Reemplazar los iconos Feather
feather.replace();

// Función para cambiar el botón activo
function toggleActive(button) {
    var buttons = document.querySelectorAll('.botones');
    var marcador = document.getElementById('marcador');
    var brillo = document.getElementById('brillo');

    // Obtener el índice del botón clicado
    var index = Array.prototype.indexOf.call(buttons, button);
    var width = button.offsetWidth;
    var height = button.offsetHeight;

    // Calcular nueva posición para el marcador
    var newPositionW = (index - 3) * width;
    var newPositionH = (index - 3) * height;

    // Aplicar transformaciones según el ancho de la pantalla
    if (window.innerWidth < 650) {
        marcador.style.transform = 'translateY(' + newPositionH + 'px)';
        //brillo.style.transform = 'translateY(' + newPositionH + 'px) rotate(1e-05deg) scale(2, 2)';
    } else {
        marcador.style.transform = 'translateX(' + newPositionW + 'px)';
        //brillo.style.transform = 'translateX(' + newPositionW + 'px) rotate(1e-05deg) scale(2, 2)';
    }

    // Cambiar el color de los botones
    buttons.forEach(function (btn) {
        btn.style.color = '';
    });

    // Cambiar el color del botón activo después de un breve retraso
    setTimeout(function () {
        button.style.color = 'var(--color-active)';
    }, 150);

    // Ajustes adicionales para pantallas anchas
    if (window.innerWidth > 650) {
        if (index === 0) {
            marcador.style.borderRadius = '50px 0px 0px 50px';
            marcador.style.marginLeft = '5px';
            marcador.style.marginRight = '0px';
            marcador.style.width = '13%';
        } else if (index === buttons.length - 1) {
            marcador.style.borderRadius = '0px 50px 50px 0px';
            marcador.style.marginRight = '5px';
            marcador.style.marginLeft = '0px';
            marcador.style.width = '13%';
        } else {
            marcador.style.borderRadius = '50px';
            marcador.style.marginLeft = '0px';
            marcador.style.marginRight = '0px';
            marcador.style.width = 'calc(100% / 7)';
        }
    }
    // Ajustes adicionales para pantallas estrechas
    if (window.innerWidth < 650) {
        marcador.style.borderRadius = '50px';
        marcador.style.top = 'auto';
        marcador.style.width = '40%';
        marcador.style.height = '5%';
        if (index === 0) {
            marcador.style.borderRadius = '0px 0px 50px 50px';
        }
        else if (index === buttons.length - 1) {
            marcador.style.borderRadius = '50px 50px 0px 0px';
        }
    }

}

// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    var menu = document.getElementById('menu-hamburguesa');
    var redes = document.getElementById('redes');
    var marcador = document.getElementById('marcador');
    var brillo = document.getElementById('brillo');
    var buttons = document.querySelectorAll('.botones');
    var bodyHome = document.getElementById('bodyHome');

    // Definir los estilos del área de redes sociales
    var redesStyles = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-body)', // Fondo semitransparente
        zIndex: '1000', // Asegúrate de que esté sobre otros elementos
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-texto)', // Color del texto
        borderRadius: '0px',
    };

    // Mostrar u ocultar el área de redes sociales
    if (!redes.classList.contains('menu-visible')) {

        bodyHome.style.overflowY = 'hidden';

        // Aplicar los estilos al área de redes sociales
        for (var style in redesStyles) {
            redes.style[style] = redesStyles[style];
        }

        // Mostrar el área de redes sociales
        redes.classList.add('menu-visible');
        redes.classList.remove('menu-hidden');

        // Agregar la clase de animación y mostrar el área de redes sociales
        redes.classList.add('slide-in');
        redes.style.display = 'flex';

        // Iterar sobre los botones y aplicar el estilo a cada uno
        buttons.forEach(function (button) {
            button.style.height = '8%';
            button.style.width = '40%';
            button.style.padding = '2px';
            button.style.borderTop = '0.1px solid var(--color-borde-top)';
        });
    } else {
        // Ocultar el área de redes sociales
        redes.classList.remove('menu-visible');
        redes.classList.add('menu-hidden');
        redes.style.display = 'none';
        bodyHome.style.overflowY = 'auto';

        // Restablecer posición del marcador y el brillo en pantallas anchas
        if (window.innerWidth > 650) {
            marcador.style.transform = '';
            brillo.style.transform = '';
        }
    }
}


// Variables para el ancho de la ventana
var windowWidth = window.innerWidth;

// Función para manejar cambios en el tamaño de la ventana
window.onresize = function () {
    // Recargar la página si cambia la condición de pantalla estrecha/ancha
    if ((windowWidth < 650 && window.innerWidth >= 650) || (windowWidth >= 650 && window.innerWidth < 650)) {
        window.location.reload();
    }

    // Actualizar el ancho de la ventana
    windowWidth = window.innerWidth;
};