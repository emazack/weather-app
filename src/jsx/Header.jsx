import React, { useEffect, useState} from 'react';

import '../css/index.css';
import '../css/header.css';
import arrow from '../assets/icons/icon-arrow-right.svg';

function Header({weatherData, setWeatherData}) {

    let url = "https://api.open-meteo.com/v1/forecast?latitude=41.89193&longitude=12.51133&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin";
    let long = "";
    let lat = "";

    useEffect( () => {
        getWeather();
    }, []);

    //presentare la temperatura corrente
    //presentare il tempo corrente
    //presentare la velocità del vento corrente
    //presentare l'orario di registrazione

    function getUserPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin`;
            });
        }
    }
    
    async function getWeather() {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(await data);
    }
    
    async function getCoordinates() {
        const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=Napoli&language=it&count=1');
        const data = await response.json();
        console.log(data);
    }
    
    
    return (
        <section class='search-weather'>
            <div class='wrapper'>
                <div class="search-container">
                    <input type="text" name="search" placeholder="Search..." class="search-input"/>
                    <button type='submit' class="search-btn">
                        <img src={arrow} alt="arrow button" />
                    </button>
                </div>
                <div class='favourite-box'>
                    <div class='add-to-favourite'>
                        Aggiungi preferito
                    </div>
                    <div class='favourite'>
                        <div class='star-icon'>
                            
                        </div>
                        <div class=''>
                            Bergamo
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
    
    export default Header;