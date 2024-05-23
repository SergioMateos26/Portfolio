// Obtener el botón por su id
var homeButton = document.getElementById("homeButton");

// Agregar un event listener para el clic en el botón
homeButton.addEventListener("click", function () {
    // Abrir la URL en la misma pestaña
    window.location.href = "index.html";
});
