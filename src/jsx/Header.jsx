import React, { useEffect, useState} from 'react';
import axios from 'axios';

import '../css/index.css';
import '../css/header.css';
import arrow from '../assets/icons/icon-arrow-right.svg';

function Header({weatherData, setWeatherData, lat, long, setLat, setLong, place, setPlace}) {

    const [urlCoords, setUrlCoords] = useState('https://geocoding-api.open-meteo.com/v1/search?name=Bergamo&language=it&count=1');

    useEffect(() => {
        setUrlCoords(`https://geocoding-api.open-meteo.com/v1/search?name=${place}&language=it&count=1`)
      }, [place]);
    
    const getCoordinates = () => {
        axios.get(urlCoords).then((response) => {
            setLat(response.data.results[0].latitude);
            setLong(response.data.results[0].longitude);
          })
    }
    
    return (
        <section class='search-weather'>
            <div class='wrapper'>
                <div class="search-container">
                    <input 
                    type="text" 
                    name="search" 
                    placeholder="Search..." 
                    class="search-input"
                    onChange={event => setPlace(event.target.value)}
                    />
                    <button 
                    type='submit' 
                    class="search-btn"
                    onClick={getCoordinates}
                    >
                        <img src={arrow} alt="arrow button" />
                    </button>
                </div>
                <div class='favourite-box'>
                    <div class='add-to-favourite'>
                        AGGIUNGI
                    </div>
                    <div class='favourite'>
                        <div class='star-icon'>
                            x
                        </div>
                        <div class='city'>
                            {place}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
    
    export default Header;