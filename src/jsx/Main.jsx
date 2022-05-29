import React, { useEffect, useState} from 'react';


import '../css/index.css';
import '../css/main.css';

import iconSun from '../assets/icons/icon-sun.svg'
import iconRain from '../assets/icons/icon-rain.svg'
import iconCloudy from '../assets/icons/icon-cloudly.svg'
import iconCloud from '../assets/icons/icon-cloud.svg'
import iconTempest from '../assets/icons/icon-tempest.svg'

function Main({weatherData, weatherCodeList, currentData, place}) {


    return (
        <section class="current-weather-section">
            <div class="wrapper">
                <div class="upper-text">
                    <div class="icon">
                        <img src={currentData.icon} alt="weather type" />
                    </div>
                    <div class="text">
                        In questo momento è
                    </div>
                </div>

                <div class="weather-text">
                    {currentData.text}
                </div>
                <div class="place-text">
                    a {place}
                </div>
            </div>
        </section>
    );
  }
  
  export default Main;