function clima() {
  const nomeCidade = document.getElementById("nomeCidade").value;
  const nomeCidadeDisplay = document.getElementById("nomeCidadeDisplay");
  const temperatura = document.getElementById("temperatura");
  const date = document.getElementById("date");
  const feels = document.getElementById("feels");
  const sky = document.getElementById("sky");
  const temp_max = document.getElementById("temp_max");
  const temp_min = document.getElementById("temp_min");
  const humidity = document.getElementById("humidity");
  const vento = document.getElementById("vento");
  const nuvens = document.getElementById("nuvens");
  const apiKey = "c7feb95f2241a003c459b0ea6fac600b";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Cidade não encontrada.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Verifica os dados retornados pela API

      const city = data.name;
      const temp = data.main.temp;
      const dat = new Date(data.dt * 1000).toLocaleDateString();
      const sensacao = data.main.feels_like;
      const ceu = data.weather[0].main;
      const max = data.main.temp_max;
      const min = data.main.temp_min;
      const humidade = data.main.humidity;
      const wind = data.wind.speed;
      const clouds = data.clouds.all;

      // Atribuindo os valores às divs
      nomeCidadeDisplay.innerHTML = city ? city : "N/A";
      temperatura.innerHTML = temp ? `${temp.toFixed(0)}°C` : "N/A";
      date.innerHTML = dat ? dat : "N/A";
      feels.innerHTML = sensacao ? `Sensação Térmica: ${sensacao}°C` : "N/A";
      sky.innerHTML = ceu ? `Céu: ${ceu}` : "N/A";
      temp_max.innerHTML = max ? `Máx <br> ${max}°C` : "N/A";
      temp_min.innerHTML = min ? `Min <br> ${min}°C` : "N/A";
      humidity.innerHTML = humidade ? `Humidade: ${humidade}%` : "N/A";
      vento.innerHTML = wind ? `Vento: ${wind} m/s` : "N/A";
      nuvens.innerHTML = `Nuvens: ${clouds}`;
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}