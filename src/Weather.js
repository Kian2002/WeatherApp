const temperatureDegree = document.querySelector(".temperature-degree");
const temperatureDescription = document.querySelector(".temperature-description");
const degreeSection = document.querySelector(".temperature");
const degreeSectionSpan = document.querySelector(".temperature span button");
const locationHeader = document.querySelector(".location");
const searchBar = document.getElementById("search-bar");
const icon = document.querySelector(".icon");

searchBar.addEventListener("search", (e) => {
  let searchString = e.target.value;
  weather(searchString);
});

function weather(e) {
  let api =
    `https:api.openweathermap.org/data/2.5/weather?q=${e}&units=imperial&appid=` +
    apiKeysWeather.weatherApi;

  fetch(api)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.cod === "404") {
        alert("City not found");
      } else if (response.cod === "400") {
        alert("Bad request - no city provided");
      } else {
        locationHeader.textContent = response.name;
        temperatureDegree.textContent = Math.round(response.main.temp);
        temperatureDescription.textContent = response.weather[0].description;

        switch (response.weather[0].main) {
          case "Clear":
            icon.innerHTML = `<i class="fa-solid fa-sun fa-10x"></i>`;
            break;
          case "Clouds":
            icon.innerHTML = `<i class="fa-solid fa-cloud fa-10x"></i>`;
            break;
          case "Rain":
            icon.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy fa-10x"></i>`;
            break;
          case "Snow":
            icon.innerHTML = `<i class="fa-solid fa-snowflake fa-10x"></i>`;
            break;
          case "Mist":
            icon.innerHTML = `<i class="fa-solid fa-smog fa-10x"></i>`;
            break;
          default:
            icon.innerHTML = `<i class="fa-solid fa-temperature-empty fa-10x"></i>`;
            break;
        }

        degreeSectionSpan.addEventListener("click", () => {
          if (degreeSectionSpan.textContent === "F°") {
            temperatureDegree.textContent = Math.round((response.main.temp - 32) * (5 / 9));
            degreeSectionSpan.textContent = "C°";
          } else {
            temperatureDegree.textContent = Math.round(response.main.temp);
            degreeSectionSpan.textContent = "F°";
          }
        });

      }
    });
}
