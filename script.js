let weather = {

    apiKey: "32d371c3b980bfb4874b29d219775fe4",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&units=metric&appid=" + this.apiKey
        )
        .then((response) =>{if (!response.ok) {
            alert("No weather found, write correctly name place.");
            throw new Error("No weather foundwrite correctly name place.");
          }
          return response.json();} )
        .then((data) => this.displayWeather(data))
        .then((data) => this.background(data))
        
       
    },

    // metoda fetchWeather objektit weather na mundrson nrvr per te marre te dhena nga serveri per nje qytet te caktuar. 
    displayWeather: function (data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed, country)

        document.querySelector(".city").innerText = "Weather in" + name + "," + country;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerHTML = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity;
        document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";

        document.querySelector(".weather").classList.remove("loading")

        return {data,description};
    },

    // Nga metoda displayWeather mundeson te dhenat qe na jep serveri ne te perdorim per t'i vendosur te bjekti qe krijojme si parameter: data dhe shfaqim DOM nga queryselector.
    search: function (  ) {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

    // search sherben qe vleren qe ne kerkojme search informacionin saj te kthej ne vleren qe jane. 
     background: function (data,description) {

        console.log('background');
        console.log('this.data: ', data);
       
        console.log('description: ', data.data.weather[0].description);
        
        if (  data.data.weather[0].description === 'overcast clouds') {
           
            console.log('background if');
         
            let  element = document.getElementById("myDIV");
               element.classList.toggle("app");
               
        

        }
        if (  data.data.weather[0].description === 'snow') {
           
            console.log('background if1');
         
            let  element = document.getElementById("myDIV");
            element.classList.toggle("snow");
           

        }
   
    }
};



document.
    querySelector(".button")
    .addEventListener("click", function () {

        weather.search();
    });
// pjesa siperm kodit na mundeson ne gjate klikimit te butonit veshtron informacionin kur klikojme dhe shfaq info.
document.
    querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == 'Enter') {
            weather.search();
        }
    })

// eshte njesoj si butoni per tastin enter.

