document.addEventListener('mousemove', function(e) {
  var puntero = document.getElementById('puntero-personalizado');
  var circuloExterior = document.getElementById('circulo-exterior');

  var offsetX = 0; // Ajuste de posición para que el puntero esté centrado en la punta
  var offsetY = 0; // Ajuste de posición para que el puntero esté centrado en la punta
  puntero.style.transform = 'translate(calc(' + (e.pageX - offsetX) + 'px - 50%), calc(' + (e.pageY - offsetY) + 'px - 50%))'; // Posiciona el puntero
  circuloExterior.style.transform = 'translate(calc(' + (e.pageX - 0) + 'px - 50%), calc(' + (e.pageY - 0) + 'px - 50%))'; // Posiciona el círculo exterior
});

// Agregar evento para cuando el puntero esté encima de #redes
var redes = document.getElementById('redes');
redes.addEventListener('mouseover', function() {
  var puntero = document.getElementById('puntero-personalizado');
  var circuloExterior = document.getElementById('circulo-exterior');
  puntero.classList.add('hidden'); // Agrega la clase 'hidden' para desvanecer el puntero
  circuloExterior.classList.add('hidden'); // Agrega la clase 'hidden' para desvanecer el círculo exterior
});

// Agregar evento para cuando el puntero salga de #redes
redes.addEventListener('mouseout', function() {
  var puntero = document.getElementById('puntero-personalizado');
  var circuloExterior = document.getElementById('circulo-exterior');
  puntero.classList.remove('hidden'); // Remueve la clase 'hidden' para volver a mostrar el puntero
  circuloExterior.classList.remove('hidden'); // Remueve la clase 'hidden' para volver a mostrar el círculo exterior
});
