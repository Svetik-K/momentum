import '../css/style.css'
import '../css/owfont-regular.css'
import {showTime} from './calender'
import {getWeather} from './weather'


showTime();
getWeather();

document.body.style.background = `url('https://raw.githubusercontent.com/Svetik-K/momentum_images/main/night/03.webp')`;
document.body.style.backgroundSize = 'cover';

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

