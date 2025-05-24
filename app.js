let city = document.querySelector(".city");
let form = document.querySelector("form");
let describe = document.querySelector(".description");
let humidity = document.querySelector(".humid");
let windspeed = document.querySelector(".windy");
let temp = document.querySelector(".temp");
let currloc = "Toronto";
let otherweather = (call) => {
  temp.innerHTML = `${call.data.main.temp}°C`;
  describe.innerHTML = call.data.weather[0].main;
  humidity.innerHTML = call.data.main.humidity;
  windspeed.innerHTML = call.data.wind.speed;
};
let callingapi = async (value) => {
  const call = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=f43b7e627ff058e78bad68302373fcd2`
  );
  document.body.style.backgroundImage = `url(https://loremflickr.com/1920/1080/${city})`;
  city.innerHTML = call.data.name;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${call.data.weather[0].icon}.png`;
  otherweather(call);
  form.elements.citypass.value = "";
};
callingapi(currloc);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = form.elements.citypass.value;
  callingapi(value);
});
