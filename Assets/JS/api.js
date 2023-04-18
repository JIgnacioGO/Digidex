// Seleccionamos el elemento que contendrá la lista de digimons
const digimonList = document.querySelector("#digimon-list");

// Realizamos una petición a la API de Digimon para obtener los datos
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json()) // Convertimos la respuesta en un objeto JSON
  .then((data) => {
    // Para cada digimon obtenido de la API, creamos un elemento de lista
    // y lo agregamos a la lista de digimons en la página HTML
    data.forEach((digimon) => {
      const digimonListItem = document.createElement("li"); // Creamos un elemento <li>
      digimonListItem.classList.add("list-group-item"); // Le agregamos una clase CSS
      digimonListItem.textContent = digimon.name; // Le asignamos el nombre del digimon como contenido
      // Agregamos un evento de click para mostrar la información del digimon en la tarjeta
      digimonListItem.addEventListener("click", () => showDigimonInfo(digimon));
      digimonList.appendChild(digimonListItem); // Agregamos el elemento <li> a la lista de digimons
    });
  })
  .catch((error) => console.error(error)); // Manejamos cualquier error que ocurra durante la petición

// Función que muestra la información de un digimon en la tarjeta
function showDigimonInfo(digimon) {
  const digimonName = digimon.name; // Obtenemos el nombre del digimon
  const digimonCard = document.querySelector("#digimon-card"); // Seleccionamos la tarjeta que mostrará la información
  digimonCard.querySelector(".card-img-top").src = digimon.img; // Asignamos la imagen del digimon a la tarjeta
  digimonCard.querySelector(".card-title").textContent = digimonName; // Asignamos el nombre del digimon a la tarjeta
  digimonCard.querySelector(
    ".card-text"
  ).textContent = `Nivel: ${digimon.level}`; // Asignamos el nivel del digimon a la tarjeta

  // Configuramos el botón "Saber más" para redirigir al usuario a la página de detalles del digimon correspondiente
  const saberMasBtn = digimonCard.querySelector(".digimon-btn"); // Seleccionamos el botón
  saberMasBtn.href = `/digimon.html?name=${digimonName}`; // Configuramos la URL del enlace
}
