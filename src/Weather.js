const temperatureDegree = document.querySelector(".temperature-degree");
const temperatureDescription = document.querySelector(".temperature-description");
const degreeSection = document.querySelector(".temperature");
const locationHeader = document.querySelector(".location");
const searchBar = document.getElementById("search-bar");
const degreeSectionSpan = document.querySelector(".temperature span button");

searchBar.addEventListener("search", (e) => {
  let searchString = e.target.value;
  weather(searchString);
});

function weather(e) {
  let api =
    `https:api.openweathermap.org/data/2.5/weather?q=${e}&units=imperial&appid=` +
    API_KEY;

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

        icon(response.weather[0].main);

        degreeSectionSpan.addEventListener("click", () => {
          tempConvert(response.main.temp);
        });
      }
    });
}
