var search = document.getElementById("search");

search.addEventListener("keyup", e => {
  var searchText = e.target.value;
  getWeatherForecast(searchText);
});
function getWeatherForecast(searchText) {
  const WeatherApi = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4567fd0cf712ca3b1af4b5ffc3e9b1f4`;
  window
    .fetch(WeatherApi)
    .then(Weather => {
      Weather.json()

        .then(data => {
          const WeatherData = data.Search;
          var output = [];
          for (let Weather of WeatherData) {
            output += `
              <div class="container">
              <section id="Weather">
              <h1>${Weather.Title}</h1>
              <span class="badge badge-success">${Weather.Year}</span>
              
              <p><button class="btn btn-dark btn-block">Search</button></p>
              </p>
              </section>
              </div>`;
            document.getElementById("template").innerHTML = output;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}
