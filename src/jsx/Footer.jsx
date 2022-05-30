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
        <section class="detail-weather">
            <div class="wrapper">
                <div class="next-days-container">
                    <div class="day-weather">
                        <div class="day">
                            Domani
                        </div>
                        <div class="weather">
                            {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[1])}
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                            {getNameDay(weatherData.daily?.time[2])}
                        </div>
                        <div class="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[2])}
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                        {getNameDay(weatherData.daily?.time[3])}
                        </div>
                        <div class="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[3])}
                        </div>
                    </div>
                    <div class="day-weather">
                        <div class="day">
                        {getNameDay(weatherData.daily?.time[4])}
                        </div>
                        <div class="weather">
                        {isError ? "-" : getTextFromCode(weatherData.daily?.weathercode[4])}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default Footer;