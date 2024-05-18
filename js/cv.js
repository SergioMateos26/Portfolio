// Obtener el botón por su id
var cvButton = document.getElementById("cvButton");

// Agregar un event listener para el clic en el botón
cvButton.addEventListener("click", function () {
    // Abrir el PDF del currículum en una nueva pestaña
    window.open("pdf/SergioMateosLozano.pdf", "_blank");
});