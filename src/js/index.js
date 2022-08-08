import '../css/style.css'
import '../css/owfont-regular.css'
import {showTime} from './calender'
import {getWeather} from './weather'


showTime();
getWeather();


let randomNum = Math.floor(Math.random() * 20) + 1;
let timeOfDay = getTimeOfDay();
setBackground(randomNum, timeOfDay);

function setBackground(randomNum, timeOfDay) {
    if(randomNum < 10) {
        document.body.style.background = `url('https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${timeOfDay}/0${randomNum}.webp')`;
    } else {
        document.body.style.background = `url('https://raw.githubusercontent.com/Svetik-K/momentum_images/main/${timeOfDay}/${randomNum}.webp')`;
    }    
    document.body.style.backgroundSize = 'cover';
}

function getTimeOfDay() {
    let today = new Date();
    let hour = today.getHours();
    if(hour > 5 && hour < 12) {
        return 'morning';
    }
    else if(hour >= 12 && hour < 18) {
        return 'afternoon';
    }
    else if(hour >= 17 && hour < 24) {
        return 'evening';
    } else {
        return 'night';
    }
}

const audioPlayer = document.querySelector('.audio-player');
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

