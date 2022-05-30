import '../css/index.css';
import '../css/footer.css';

function Footer({weatherData, weatherCodeList, isError}) {

    const weeksDay = [
        'Domenica',
        'Lunedì',
        'Martedì',
        'Mercoledì',
        'Giovedì',
        'Venerdì',
        'Sabato'
    ]

    const getTextFromCode = (code) => {
        let resultText = '';
        weatherCodeList.forEach(element => {
            if (code === element.id) {
                resultText = element.text;
            }
        });
        return resultText;
    }

    const getNameDay = (stringDate) => {
        const currentDate = new Date(stringDate);
        let numberDate =  currentDate.getDay();
        return weeksDay[numberDate];
    }
    
    return (
        <section className="detail-weather">
            <div className="wrapper">
                <div className="next-days-container">
                    <div className="day-weather">
                        <div className="day">
                            Domani
                        </div>
                        <div className="weather">
                            {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[1])}
                        </div>
                    </div>
                    <div className="day-weather">
                        <div className="day">
                            {getNameDay(weatherData.daily?.time[2])}
                        </div>
                        <div className="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[2])}
                        </div>
                    </div>
                    <div className="day-weather">
                        <div className="day">
                        {getNameDay(weatherData.daily?.time[3])}
                        </div>
                        <div className="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[3])}
                        </div>
                    </div>
                    <div className="day-weather">
                        <div className="day">
                        {getNameDay(weatherData.daily?.time[4])}
                        </div>
                        <div className="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[4])}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Footer;