const content = document.getElementById('detail');
const id = Number(window.location.hash.replace("#", ""));

async function getCharacterDetail() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await response.json();

  content.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}" alt="${character.name}" width="200"/>
    <p><strong>Nome:</strong> ${character.name}</p>
    <p><strong>Espécie:</strong> ${character.species}</p>
    <p><strong>Gênero:</strong> ${character.gender}</p>
    <p><strong>Dimensão:</strong> ${character.origin.name}</p>
    <p><strong>Status:</strong> ${character.status}</p>
    <p><a href="index.html">Voltar para o início</a></p>
  `;
}

getCharacterDetail();
