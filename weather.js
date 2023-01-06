var searchValue = document.querySelector("#searchbox");
      searchValue.addEventListener("keypress", setFunc);
      function setFunc(e) {
        if (e.keyCode == 13) {
          getData(searchValue.value);
        }
      }
      function getData(value) {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=`+
            value +
            `&appid=a98a3edaa4e478948d9e2eb5cfcc8184
                `
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (weather) {
            document.querySelector('#city').innerHTML = weather.name;
            document.querySelector('#temp').innerHTML = weather.main.temp;
            document.querySelector('#min_max_temp').innerHTML =
              'Min.' +
              weather.main.temp_min +
              ' / Max.' +
              weather.main.temp_max;
            document.querySelector('#weather').innerHTML =
              weather.weather[0].main;
            document.querySelector('#weather_desc').innerHTML =
              weather.weather[0].description;
            document.querySelector('#wind_dir_speed').innerHTML =
              'Wind direction:' +
              weather.wind.deg +
              '/ Wind speed:' +
              weather.wind.speed;
          })
          .catch(function (err) {
            console.log(err);
          });
      }