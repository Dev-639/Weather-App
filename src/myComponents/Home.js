import { useState, useEffect } from "react"
import './Home.css';
import clear from './images/clear.png';
import wind from './images/wind.png';
import humidity from './images/humidity.png';
import cloud from './images/cloud.png';
import drizzle from './images/drizzle.png';
import rain from './images/rain.png';
import snow from './images/snow.png';
// import search from './Header.js'
import React from 'react'

export const Home = (props) => {
  let stylecard1 = {
    maxWidth: "700px",
    maxHeight: "300px",
  }
  let styleCard2={
    width: "18rem",
  }
  let weather; 
  if (props.weatherData.icon == "02d" || props.weatherData.icon == "03d" || props.weatherData.icon == "02n" || props.weatherData.icon == "03n") {
    weather = cloud;
  }
  else if (props.weatherData.icon == "04d" || props.weatherData.icon == "09d" || props.weatherData.icon == "04n" || props.weatherData.icon == "09n") {
    weather = drizzle;
  }
  else if (props.weatherData.icon == "10d" || props.weatherData.icon == "11d" || props.weatherData.icon == "10n" || props.weatherData.icon == "11n") {
    weather = rain;
  }
  else if (props.weatherData.icon == "013d" || props.weatherData.icon == "013n") {
    weather = snow;
  }
  else {
    weather = clear;
  }
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 576px)").matches
  )
  useEffect(() => {
    window
      .matchMedia("(min-width: 576px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <>
      <div className="outside">
        {matches &&
          (<div className="card mb-3" style={stylecard1} >
            <div className="col-md-4">
              <img src={weather} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body my-2 d-flex flex-col">
                <div className="details d-flex justify-content-center">
                  <div className="row col-md-10 ">
                    {(props.weatherData.temp) === "" ? <h3 className="temperature ">Temp(&deg;C)</h3> : (<h3 className="temperature "> {props.weatherData.temp} &deg;C</h3>)}
                    <h4 className="Description fs-3 "> {props.weatherData.desc}</h4>
                    <h3 className="Location  fs-1">{props.weatherData.search}</h3>

                    <h3 className="humidity mt-1 fs-5"><img src={humidity} alt="" /> &nbsp;{props.weatherData.humidity}%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img src={wind} alt="" /> {props.weatherData.wind} Km/h <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Humidity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wind Speed</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        {!matches &&
          (
            <div className="card2" style={styleCard2}>
              <img src={weather} className="smallCardImage card-img-top" alt="..." />
              <div className="card-body">
              <div className="details d-flex justify-content-center">
                  <div className="row col-md-10  d-flex justify-content-center px-4 py-2 ">
                    {(props.weatherData.temp) === "" ? <h1 className="temperatureSmall text-center ">Temp(&deg;C)</h1> : (<h1 className="temperatureSmall text-center "> {props.weatherData.temp} &deg;C</h1>)}
                    <h3 className="Description fs-2 text-center"> {props.weatherData.short}</h3>
                    <h2 className="Location  fs-1 m-1 text-center">{props.weatherData.search}</h2>

                    <h3 className="humidity mt-3 fs-5 text-center"><img src={humidity} alt="" /> &nbsp;{props.weatherData.humidity}%  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Humidity </h3>
                    <h3 className="humidity my-3 fs-5 text-center"><img src={wind} alt="" /> {props.weatherData.wind} Km/h <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wind Speed </h3>
                  </div>
                </div> 
              </div>
            </div>
          )}
      </div>
    </>
  )
}
export default Home 