function infoFilmes() {
  const nomeFilme = document.getElementById("nomeFilme").value.toLowerCase();

  const boxFilme = document.getElementById("boxFilme");

  fetch(`https://omdbapi.com/?apikey=8fa8be48&s=${nomeFilme}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Filme Não Encontrado");
      }
      return response.json();
    })
    .then((data) => {
      const dadosFilme = `
          <h2>${data.Search.Title}</h2>
          <img src="${data.Search.Poster}" alt="${$data.Search.Title}"/>
          <p><strong>Ano: </strong>${data.Search.Year}</p>
          `;

      boxFilme.innerHTML = dadosFilme;
    })
    .catch((error) => {
      boxFilme.innerHTML = `<p>${error.message}</p>`;
    });
}