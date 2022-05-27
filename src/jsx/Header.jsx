import React, { useEffect } from 'react';

function Header() {

    let url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin";
    let long = "";
    let lat = "";

    useEffect( () => {
        getWeather();
        getCoordinates();
    }, []);
    
    
    
    async function getWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=weathercode&daily=weathercode&current_weather=true&timezone=Europe%2FBerlin`;
            });
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // per ogni dato che si trova in hourly.time fai corrispondere il suo hourly.temperature
        console.log(data.current_weather.time);
        console.log(data.current_weather.temperature);
        console.log(data.current_weather.weathercode);
        console.log(data.current_weather.windspeed);
    }
    
    async function getCoordinates() {
        const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=Napoli&language=it&count=1');
        const data = await response.json();
        console.log(data);
    }
    
    
    return (
        <div>
            Header
        </div>
        );
    }
    
    export default Header;