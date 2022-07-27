const icons = document.querySelector(".icon");


function icon(response) {
  switch (response) {
    case "Clear":
      icons.innerHTML = `<i class="fa-solid fa-sun fa-10x"></i>`;
      break;
    case "Clouds":
      icons.innerHTML = `<i class="fa-solid fa-cloud fa-10x"></i>`;
      break;
    case "Rain":
      icons.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy fa-10x"></i>`;
      break;
    case "Snow":
      icons.innerHTML = `<i class="fa-solid fa-snowflake fa-10x"></i>`;
      break;
    case "Mist":
      icons.innerHTML = `<i class="fa-solid fa-smog fa-10x"></i>`;
      break;
    default:
      icons.innerHTML = `<i class="fa-solid fa-temperature-empty fa-10x"></i>`;
      break;
  }
}
