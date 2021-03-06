import React, { useState, useEffect} from 'react';
import axios from 'axios'

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
    {id: 0, text:"Sereno", bg: 'sun' , icon: iconSun},
    {id: 1, text:"Sereno", bg: 'sun' , icon: iconSun},
    {id: 2, text:"In parte Sereno", bg: 'sun' , icon: iconCloudy},
    {id: 3, text:"Coperto", bg: 'cloud' , icon: iconCloud},
    {id: 45, text:"Nuvoloso", bg: 'cloud', icon: iconCloud},
    {id: 48, text:"Nuvoloso", bg: 'cloud' , icon: iconCloud},
    {id: 51, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 53, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 55, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 61, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 65, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 63, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 80, text:"Pioggia", bg: 'rain' , icon: iconRain},
    {id: 81, text:"Temporale", bg: 'rain' , icon: iconTempest},
    {id: 82, text:"Temporale", bg: 'rain' , icon: iconTempest},
    {id: 95, text:"Temporale", bg: 'rain' , icon: iconTempest},
    {id: 96, text:"Temporale", bg: 'rain' , icon: iconTempest},
    {id: 99, text:"Temporale", bg: 'rain' , icon: iconTempest},
  ];

  const [weatherData, setWeatherData] = useState({});
  const [place, setPlace] = useState('Bergamo');
  const [currentData, setCurrentData] = useState([]);
  const [lat, setLat] = useState('45.69601');
  const [long, setLong] = useState('9.66721');
  const [urlForecast, setUrlForecast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteWeatherData, setFavouriteWeatherData] = useState(() => {
    const saved = localStorage.getItem("fweather");
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  });
  const [favouritePlace, setFavouritePlace] = useState(() => {
    const saved = localStorage.getItem("fplace");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    const searchPlace = async () => {
      try {
        setIsLoading(true);
        const resp = await axios.get(urlForecast);
        setTimeout(() => {          
          setWeatherData(resp.data);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    }
    searchPlace();
  }, [urlForecast]);


  useEffect(() => {
      setUrlForecast(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin`);
  }, [lat, long]);


  useEffect(() => {
      const getCurrentWeatherData = () => {
          let weatherCode = weatherData.current_weather.weathercode;
          weatherCodeList.forEach(element => {
              if (weatherCode === element.id) {
                  setCurrentData(element);
              }
          });
      }
      if (weatherData.current_weather) {            
          if (weatherData.current_weather.weathercode != null) {
              getCurrentWeatherData();
            }
      }
    }, [weatherData]);

  return (
    <div className='page-container'>
        <img className='bg-image' data-active={currentData.bg === 'sun' ? "active" : 'not-active'} src={bgImageSun} alt="meteo sole" />
        <img className='bg-image' data-active={currentData.bg === 'rain' ? "active" : 'not-active'} src={bgImageRain} alt="meteo pioggia" />
        <img className='bg-image' data-active={currentData.bg === 'cloud' ? "active" : 'not-active'} src={bgImageCloud} alt="meteo nuvole" />
        <div className='opacity-layer'></div>
        <Header 
          weatherData={weatherData} 
          setWeatherData={setWeatherData}
          setLat={setLat}
          setLong={setLong}
          place={place}
          setPlace={setPlace}
          setFavouriteWeatherData={setFavouriteWeatherData}
          favouriteWeatherData={favouriteWeatherData}
          favouritePlace={favouritePlace}
          setFavouritePlace={setFavouritePlace}
          setIsError={setIsError}
          isError={isError}
          isFavourite={isFavourite}
          setIsFavourite={setIsFavourite}
        />
        <Main 
          weatherData={weatherData} 
          weatherCodeList={weatherCodeList}
          currentData={currentData}
          place={place}
          isLoading={isLoading}
          isError={isError}
        />
        <Footer 
          weatherData={weatherData} 
          weatherCodeList={weatherCodeList}
          isError={isError}
        />
    </div>
  );
}

export default App;
