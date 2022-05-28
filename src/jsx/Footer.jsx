import '../css/index.css';
import '../css/footer.css';

import iconSun from '../assets/icons/icon-sun.svg'
import iconRain from '../assets/icons/icon-rain.svg'
import iconCloudy from '../assets/icons/icon-cloudly.svg'
import iconCloud from '../assets/icons/icon-cloud.svg'
import iconTempest from '../assets/icons/icon-tempest.svg'

function Footer({weatherData, weatherCodeList}) {
    return (
        <section className="detail-weather">
            <div className="wrapper">
                <div className="next-days-container">
                    <div className="day-weather">
                        <div className="day">
                            Domani
                        </div>
                        <div className="weather">
                            Piovoso
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Footer;