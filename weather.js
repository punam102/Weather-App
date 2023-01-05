var searchValue = document.querySelector("#searchbox");
searchValue.addEventListener("keypress", setFunc);
function setFunc(e) {
  if (e.keyCode == 13) {
    getData(searchValue.value);
  }
}
function getData(value) {
  fetch(`https://api.openweather.org/data/2.5/weather?q=`+value+`&appid=2787bda66193d6b033a09da2fa95cd82
    `)
    .then(function (response) {
      return response.json();
    })
    .then(function (weather) {
      document.querySelector("#city").innerHTML = weather.name;
      document.querySelector('#temp').innerHTML = weather.main.temp;
    })
    .catch(function (err) {
      console.log(err);
    });
}
