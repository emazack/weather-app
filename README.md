# Weather app in React

This is a Weather App made in React. 

## Table of contents

- [Make it works](#Make-it-works)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Make it works

1)
```
npm install
```
2)
```
npm start
```
Visit with Guest browser page ;)

### The challenge

Users should be able to:

- Check the weather in the world with preset italian region specificity
- Search for a place
- Check the weather for the current day and the next 4 days
- Save one favourite place where to check the weather
- Check the favourite place also after the refresh of the page
- Navigate the page in mobile and tablet

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile responsive
- [React](https://reactjs.org/) - JS library
- [Axios Components](https://www.freecodecamp.org/news/how-to-use-axios-with-react/) - For API calls
- [OpenMeteo](https://open-meteo.com/en) - Weather forecast APIs

### What I learned

I learnt how to read the documentation of open-meteo and to work with the API response JSON.

I have learnt the basic use of React with props, axios and Hooks; Hook allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
I used axios to handle async API calls; I also learnt that React does not like that you access an Object property if it is not sure that is defined.

I learnt a nice way to handle in css a blurred background that at the same time is transparent.

Here some snippet of code that help me to learn the things explained before:

```css
.detail-weather { 
    height: 100%;
    background: rgb(151,151,151,0.6);
    backdrop-filter: blur(8px);
}
```
```js
  useEffect(() => {
      const getCurrentWeatherData = () => {
          let weatherCode = weatherData.current_weather.weathercode;
          weatherCodeList.forEach(element => {
              if (weatherCode === element.id) {
                  setCurrentData(element);
              }
          });
      }
      if (weatherData.current_weather) {            
          if (weatherData.current_weather.weathercode != null) {
              getCurrentWeatherData();
            }
      }
    }, [weatherData]);
```

### Continued development

In the future I would like to handle better the hooks and to understand how React rendere the page more in depth. I had some problems related to async calls and rendering of the data. Maybe a new project similar to this where I can try differnt API call. At the moment, I had no time to invest for refactoring, I would like to work in perfomance and best practice.
I also want to add the enter press behaviour and to improve how to favourite feature is working.

### Useful resources

- [ui__ux](https://www.instagram.com/ui__ux/?hl=it) - This helped me for UI/UX creation. I really liked the example provided.
- [StackAbuse](https://stackabuse.com/making-asynchronous-http-requests-in-javascript-with-axios/) - This is an amazing article which helped me to better handle the promise with axios; I still willing to explore this field.

## Author

- Linkedin - [Emanuele Zaccaria](https://www.linkedin.com/in/emazack/)
- Twitch - [@f4giolini](https://www.twitch.tv/f4giolini?lang=it)


## Acknowledgments

Thanks to Alberto Germanà for the "?" 
