import React, { useState, useEffect} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../css/reset.css';
import '../css/index.css';
import bgImageSun from '../assets/desktop/bg-image-sun.jpg'
import bgImageRain from '../assets/desktop/bg-image-rain.jpg'
import bgImageCloud from '../assets/desktop/bg-image-cloud.jpg'

import iconSun from '../assets/icons/icon-sun.svg'
import iconRain from '../assets/icons/icon-rain.svg'
import iconCloudy from '../assets/icons/icon-cloudly.svg'
import iconCloud from '../assets/icons/icon-cloud.svg'
import iconTempest from '../assets/icons/icon-tempest.svg'


function App() {

  const weatherCodeList = [
    {id: 0, text:"Sereno", bg: bgImageSun , icon: iconSun},
    {id: 1, text:"Sereno", bg: bgImageSun , icon: iconSun},
    {id: 2, text:"In parte Sereno", bg: bgImageSun , icon: iconCloudy},
    {id: 3, text:"Cielo Coperto", bg: bgImageCloud , icon: iconCloud},
    {id: 51, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 53, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 55, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 61, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 65, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 63, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 80, text:"Pioggia", bg: bgImageRain , icon: iconRain},
    {id: 81, text:"Temporale", bg: bgImageRain , icon: iconTempest},
    {id: 82, text:"Temporale", bg: bgImageRain , icon: iconTempest},
    {id: 45, text:"Nuvoloso", bg: bgImageCloud, icon: iconCloud},
    {id: 48, text:"Nuvoloso", bg: bgImageCloud , icon: iconCloud},
  ];

  const [weatherData, setWeatherData] = useState([]);
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect( () => {
      const getCoordsData = async () => {
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition( (position) => {
              setLat(position.coords.longitude);
              setLong(position.coords.latitude);
          });
        }

        await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin`)
        .then(res => res.json())
        .then(result => {
          setWeatherData(result)
          console.log(result);
        });
      }
      getCoordsData();
}, [long, lat]);


  return (
    <div className='page-container'>
        <img class='bg-image' src={bgImageSun} alt="sfondo evocativo meteo" />
        <div class='opacity-layer'></div>
        <Header weatherData={weatherData} setWeatherData={setWeatherData}/>
        <Main weatherData={weatherData} weatherCodeList={weatherCodeList}/>
        <Footer weatherData={weatherData} weatherCodeList={weatherCodeList}/>
    </div>
  );
}

export default App;
