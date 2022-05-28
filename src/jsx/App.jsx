import React, { useState} from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../css/reset.css';
import '../css/index.css';
import bgImage from '../assets/desktop/bg-image-sun.jpg'

function App() {

  const [weatherData, setWeatherData] = useState([]);

  return (
    <div className='page-container'>
        <img class='bg-image' src={bgImage} alt="" />
        <div class='opacity-layer'></div>
        <Header weatherData={weatherData} setWeatherData={setWeatherData}/>
        <Main weatherData={weatherData}/>
        <Footer weatherData={weatherData}/>
    </div>
  );
}

export default App;
