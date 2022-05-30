import '../css/index.css';
import '../css/main.css';


function Main({currentData, place, isLoading, isError}) {

    return (
        <section class="current-weather-section" data-loading={isLoading}>
            <div class="wrapper">
                <div class="upper-text">
                    <div class="icon">
                        {isError ? null : (
                            <img src={currentData.icon} alt="weather type" />
                        )}
                    </div>
                    <div class="text">
                    {isError ? "Cerca dove controllare il Meteo" : "In questo momento è"}
                    </div>
                </div>

                <div class="weather-text">
                {isError ? "-" : currentData.text}
                </div>
                <div class="place-text">
                    a {isError ? "-" : place}
                </div>
            </div>
        </section>
    );
  }
  
  export default Main;