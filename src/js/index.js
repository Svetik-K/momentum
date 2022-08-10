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




// Audio player
const playButton = document.querySelector('.button_play');
const prevButton = document.querySelector('.button_prev');
const nextButton = document.querySelector('.button_next');
const title = document.querySelector('.track-title');
const track = document.querySelector('.track');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const audioBar = document.querySelector('.audio-player__info');


const tracks = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind'];

let trackIndex = 0;

loadSong(tracks[trackIndex]);

function loadSong(song) {
    title.textContent = song;
    track.src = `./assets/sounds/${song}.mp3`;
    // track.volume = 0.2;
}

function playSong() {
    audioBar.classList.add('play');
    playButton.style.background = `url(./assets/svg/pause.svg)`;
    playButton.style.backgroundSize = 'contain';
    
    track.play();
}

function pauseSong() {
    audioBar.classList.remove('play');
    playButton.style.background = `url(./assets/svg/play.svg)`;
    playButton.style.backgroundSize = 'contain';

    track.pause();
}

function prevSong() {
    trackIndex--;

    if(trackIndex < 0) {
        trackIndex = tracks.length - 1;
    }

    loadSong(tracks[trackIndex]);

    playSong();
}

function nextSong() {
    trackIndex++;

    if(trackIndex > tracks.length - 1) {
        trackIndex = 0;
    }

    loadSong(tracks[trackIndex]);

    playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = track.duration;

    track.currentTime = (clickX / width) * duration;
}

// Event listeners
playButton.addEventListener('click', () => {
    const isPlaying = audioBar.classList.contains('play');

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
track.addEventListener('timeupdate', updateProgress);
track.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgress);

