const urlParams = new URLSearchParams(window.location.search);
const digimonName = urlParams.get("name");

fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
  .then((response) => response.json())
  .then((data) => {
    const digimonImage = document.querySelector("#digimon-image");
    const digimonNameElement = document.querySelector("#digimon-name");
    const digimonLevelElement = document.querySelector("#digimon-level");

    digimonImage.src = data[0].img;
    digimonNameElement.textContent = data[0].name;
    digimonLevelElement.textContent = `Nivel: ${data[0].level}`;
  })
  .catch((error) => console.error(error));