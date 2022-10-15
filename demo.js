let action = document.querySelector("#action");
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let hum = document.querySelector('.hum');
let result = document.querySelector('.result');
let country = document.querySelector('.country');
let error = document.querySelector('.error');
let maindiv = document.querySelector('.maindiv');

action.addEventListener("click", () => {
  let str = document.querySelector("#str").value;
  result.style.display = 'block';
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      str +
      "&appid=dd689ed3f238a4192bfb43a45ed2b1ee"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      country.innerHTML = data.sys.country;
      name.innerHTML = data.name;
      desc.innerHTML = data.weather[0].description;
      hum.innerHTML = data.main.humidity;
    })
    .catch((err) =>{
      maindiv.style.display = "none";
      error.style.display = "block";
    });
});
