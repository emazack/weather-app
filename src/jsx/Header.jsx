import React, { useEffect, useState} from 'react';
import axios from 'axios';

import '../css/index.css';
import '../css/header.css';
import arrow from '../assets/icons/icon-arrow-right.svg';
import star from '../assets/icons/icon-star.svg';

function Header({weatherData, setWeatherData, setLat, setLong, place, setPlace, setFavouriteWeatherData, favouritePlace, setFavouritePlace, favouriteWeatherData, isError, setIsError, isFavourite, setIsFavourite}) {

    const [urlCoords, setUrlCoords] = useState('https://geocoding-api.open-meteo.com/v1/search?name=Bergamo&language=it&count=1');

    useEffect(() => {
        setUrlCoords(`https://geocoding-api.open-meteo.com/v1/search?name=${place}&language=it&count=1`)
    }, [place]);

    useEffect(() => {
        const saveLocalFavourite = () => {
            localStorage.setItem("fplace", JSON.stringify(favouritePlace));
            localStorage.setItem("fweather", JSON.stringify(favouriteWeatherData));
        }
        saveLocalFavourite();
        if (favouritePlace !== '' && favouriteWeatherData !== {}) {
            setIsFavourite(true); 
        } else {
            setIsFavourite(false); 
        }
    }, [favouritePlace, favouriteWeatherData, setIsFavourite]);
    
    const getCoordinates = async () => {
        try {    
            const resp = await axios.get(urlCoords);        
            setLat(resp.data.results[0].latitude);
            setLong(resp.data.results[0].longitude);
            setIsError(false)
        } catch (error) {
            setIsError(true)
            console.log(error);
        }
    }

    const addFavourite = () => {
        if (isFavourite) {
            setFavouriteWeatherData({});
            setFavouritePlace('');
        } else {
            setFavouriteWeatherData({...weatherData});
            setFavouritePlace(place);
        } 
        setIsFavourite(!isFavourite);
    }

    const selectFavourite = () => {
        setWeatherData(favouriteWeatherData);
        setPlace(favouritePlace);
    }
    
    return (
        <section className='search-weather'>
            <div className='wrapper'>
                <div className="search-container" data-error={isError}>
                    <input 
                    type="text" 
                    name="search" 
                    placeholder="Cerca..." 
                    className="search-input"
                    onChange={event => setPlace(event.target.value)}
                    />
                    <button 
                    type='submit' 
                    className="search-btn"
                    onClick={getCoordinates}
                    >
                        <img src={arrow} alt="arrow button" />
                    </button>
                </div>
                <div className='favourite-box'>
                    {isError ? null : (
                        <div className='add-to-favourite'
                            onClick={addFavourite}
                        >
                            {!isFavourite ? "AGGIUNGI" : "RIMUOVI"}
                        </div>
                    )}
                    { isFavourite ? (
                        <div className='favourite'>
                            <div className='star-icon'>
                                <img src={star} alt="star" />
                            </div>
                            <div 
                                className='city'
                                onClick={selectFavourite}
                            >
                                {favouritePlace}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
        );
    }
    
    export default Header;