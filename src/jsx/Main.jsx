import '../css/index.css';
import '../css/main.css';

function Main({weatherData}) {


    return (
        <section className="current-weather-section">
            <div className="wrapper">
                <div className="upper-text">
                    <div className="icon">

                    </div>
                    <div className="text">
                        In questo momento è
                    </div>
                </div>

                <div className="weather-text">
                    Piovoso
                </div>
                <div className="place-text">
                    a Bergamo, IT
                </div>
            </div>
        </section>
    );
  }
  
  export default Main;