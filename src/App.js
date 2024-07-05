import './App.css';
import './index.css';
import { Header } from './myComponents/Header';
import { Home } from './myComponents/Home'; 
import clear from './myComponents/images/clear.png';
import { useState } from 'react';
function App() { 
  const api = {
    key: "2bf3feddd9579afb1acad8072e4c622f",
    base: "https://api.openweathermap.org/data/2.5/",
  }
  const [weatherData, setWeatherData] = useState({
    search: "Place",
      temp: "",
      humidity: "",
      icon: clear,
      short: "Weather",
      desc: "Description",
      wind: "",
  });
  // const [search, setSearch] = useState("");  
  
  const fun = async (search) => {
    console.log("Here is the API "+search);  
    const response = await fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
    const data = await response.json();
    console.log(data);
    if(data.cod=="404"){
      alert("Enter a valid city/country name.");
    }
    else{
    setWeatherData({
      search: data.name,
      temp: Math.floor(data.main.temp),
      humidity: data.main.humidity,
      icon: data.weather[0].icon,
      short: data.weather[0].main,
      desc: data.weather[0].description,
      wind: data.wind.speed,
    })
   }
  } 
  return (
    <>
      <Header searching={fun}/>
    
      <Home weatherData={weatherData} /> 
    </>
  );  
}

export default App;
  