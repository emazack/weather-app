import React, { useEffect, useState} from 'react';


import '../css/index.css';
import '../css/main.css';

import iconSun from '../assets/icons/icon-sun.svg'
import iconRain from '../assets/icons/icon-rain.svg'
import iconCloudy from '../assets/icons/icon-cloudly.svg'
import iconCloud from '../assets/icons/icon-cloud.svg'
import iconTempest from '../assets/icons/icon-tempest.svg'

function Main({weatherData, weatherCodeList}) {


    const [currentData, setCurrentData] = useState([]);

    useEffect( () => {
        getCurrentWeatherData();
    }, [weatherData]);

    function getCurrentWeatherData() {
        let weatherCode = weatherData.current_weather.weathercode;
        weatherCodeList.forEach(element => {
            if (weatherCode === element.id) {
                setCurrentData(element);
            }
        });
    }

    console.log("result");
    console.log(currentData);

    return (
        <section class="current-weather-section">
            <div class="wrapper">
                <div class="upper-text">
                    <div class="icon">

                    </div>
                    <div class="text">
                        In questo momento è
                    </div>
                </div>

                <div class="weather-text">
                    Piovoso
                </div>
                <div class="place-text">
                    a Bergamo, IT
                </div>
            </div>
        </section>
    );
  }
  
  export default Main;