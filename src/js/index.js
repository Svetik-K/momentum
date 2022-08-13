import '../css/style.css'
import '../css/owfont-regular.css'
import { getRandomNum, getTimeOfDay, setBackground } from './background'
import { showTime } from './calender'
import { getCityWeather } from './weather'

// Show time, date, greeting
showTime();

// Get weather
const city = document.querySelector('.weather__city');
city.addEventListener('change', getCityWeather);

// Get background image
let randomNum = getRandomNum();
let timeOfDay = getTimeOfDay();
setBackground(randomNum, timeOfDay);

// Get a quote
const phrase = document.querySelector('.phrase');
const author = document.querySelector('.author');
const reloadButton = document.querySelector('.button_reload');

getQuotes();

async function getQuotes() { 
    let random = Math.floor(Math.random() * 200) + 1; 
    const quotes = './quotes.json';
    const response = await fetch(quotes);
    const data = await response.json(); 
    phrase.textContent = data[random].text;
    author.textContent = data[random].author;   
}

reloadButton.addEventListener('click', getQuotes);

// Local storage for name input and weather
const name = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
}

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getCityWeather();
    } else {
        city.value = 'Minsk';
        getCityWeather();
    }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
  

// Background slider
const slideLeft = document.querySelector('.button_slide-left');
const slideRight = document.querySelector('.button_slide-right');

function returnToPreviousSlide(random, time) {
    if(random <= 1) {
        random = 21;
    }
    random--;
    setBackground(random, time); 
    randomNum = random; 
}

function goToNextSlide(random, time) {
    if(random === 20) {
        random = 0;
    }
    random++;
    setBackground(random, time);
    randomNum = random;     
}

slideLeft.addEventListener('click', () => {
    returnToPreviousSlide(randomNum,timeOfDay);
});

slideRight.addEventListener('click', () => {
    goToNextSlide(randomNum,timeOfDay);
});






