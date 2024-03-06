const apikey = "0464ea1686a3d64d48ca6d60090ba6aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

        if(data.weather[0].main == "Clouds"){
            weathericon.src = "icons/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weathericon.src = "icons/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weathericon.src = "icons/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weathericon.src = "icons/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weathericon.src = "icons/mist.png";
        }

        document.querySelector(".weather").style.display = "block"  
        document.querySelector(".error").style.display = "none" 
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
