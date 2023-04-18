// Seleccionamos el campo de entrada de búsqueda y el formulario
const searchInput = document.querySelector("#search-input");
const searchForm = document.querySelector("#search-form");

// Agregamos un controlador de eventos de envío de formulario
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenimos el envío predeterminado del formulario
  
  const digimonName = searchInput.value; // Obtenemos el valor del campo de entrada de búsqueda
  
  // Realizamos una petición a la API de Digimon para buscar el digimon por nombre
  fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then((response) => response.json()) // Convertimos la respuesta en un objeto JSON
    .then((data) => {
      if (data.length > 0) {
        // Redireccionamos a la página de detalles del digimon encontrado
        window.location.href = `/digimon.html?name=${data[0].name}`;
      } else {
        alert("Digimon no encontrado!! :( "); // Mostramos una alerta si no se encuentra el digimon
      }
    })
    .catch((error) => console.error(error)); // Manejamos cualquier error que ocurra durante la petición
});
