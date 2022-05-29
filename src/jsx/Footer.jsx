import '../css/index.css';
import '../css/footer.css';

import iconSun from '../assets/icons/icon-sun.svg'
import iconRain from '../assets/icons/icon-rain.svg'
import iconCloudy from '../assets/icons/icon-cloudly.svg'
import iconCloud from '../assets/icons/icon-cloud.svg'
import iconTempest from '../assets/icons/icon-tempest.svg'

function Footer({weatherData, weatherCodeList}) {

    console.log(weatherData);
    return (
        <section class="detail-weather">
            <div class="wrapper">
                <div class="next-days-container">
                    <div class="day-weather">
                        <div class="day">
                            Domani
                        </div>
                        <div class="weather">
                            Piovoso
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                            Domani
                        </div>
                        <div class="weather">
                            Piovoso
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                            Domani
                        </div>
                        <div class="weather">
                            Piovoso
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                            Domani
                        </div>
                        <div class="weather">
                            Piovoso
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Footer;