const playButton = document.querySelector('.button_play');
const prevButton = document.querySelector('.button_prev');
const nextButton = document.querySelector('.button_next');
const title = document.querySelector('.track-title');
const track = document.querySelector('.track');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const audioBar = document.querySelector('.audio-player__info');
const volumeProgress = document.querySelector('.volume-progress');
const volumeButton = document.querySelector('.button_volume');


const tracks = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind'];

let trackIndex = 0;

loadSong(tracks[trackIndex]);

function loadSong(song) {
    title.textContent = song;
    track.src = `./assets/sounds/${song}.mp3`;
    track.volume = 0.2;
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

function changeVolume() {
    track.volume = volumeProgress.value;
}

function turnOffVolume(e) {
    if(!e.target.classList.contains('mute')) {
        volumeButton.classList.add('mute');
        track.volume = 0;
    } else {
        volumeButton.classList.remove('mute');
        track.volume = 0.5;
    }
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
volumeButton.addEventListener('click', turnOffVolume)
track.addEventListener('timeupdate', updateProgress);
track.addEventListener('ended', nextSong);
progressContainer.addEventListener('click', setProgress);
volumeProgress.addEventListener('change', changeVolume);
