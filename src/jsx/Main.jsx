import '../css/index.css';
import '../css/main.css';


function Main({currentData, place, isLoading, isError}) {

    return (
        <section className="current-weather-section" data-loading={isLoading}>
            <div className="wrapper">
                <div className="upper-text">
                    <div className="icon">
                        {isError ? null : (
                            <img src={currentData.icon} alt="weather type" />
                        )}
                    </div>
                    <div className="text">
                    {isError ? "Cerca dove controllare il Meteo" : "In questo momento è"}
                    </div>
                </div>

                <div className="weather-text">
                {isError ? "-" : currentData.text}
                </div>
                <div className="place-text">
                    a {isError ? "-" : place}
                </div>
            </div>
        </section>
    );
  }
  
  export default Main;