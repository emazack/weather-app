import '../css/index.css';
import '../css/footer.css';

function Footer({weatherData}) {
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