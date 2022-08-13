/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ (() => {

eval("const playButton = document.querySelector('.button_play');\r\nconst prevButton = document.querySelector('.button_prev');\r\nconst nextButton = document.querySelector('.button_next');\r\nconst title = document.querySelector('.track-title');\r\nconst track = document.querySelector('.track');\r\nconst progressContainer = document.querySelector('.progress-container');\r\nconst progress = document.querySelector('.progress');\r\nconst audioBar = document.querySelector('.audio-player__info');\r\nconst volumeProgress = document.querySelector('.volume-progress');\r\nconst volumeButton = document.querySelector('.button_volume');\r\n\r\n\r\nconst tracks = ['Aqua Caelestis', 'Ennio Morricone', 'River Flows In You', 'Summer Wind'];\r\n\r\nlet trackIndex = 0;\r\n\r\nloadSong(tracks[trackIndex]);\r\n\r\nfunction loadSong(song) {\r\n    title.textContent = song;\r\n    track.src = `./assets/sounds/${song}.mp3`;\r\n    track.volume = 0.2;\r\n}\r\n\r\nfunction playSong() {\r\n    audioBar.classList.add('play');\r\n    playButton.style.background = `url(./assets/svg/pause.svg)`;\r\n    playButton.style.backgroundSize = 'contain';\r\n    \r\n    track.play();\r\n}\r\n\r\nfunction pauseSong() {\r\n    audioBar.classList.remove('play');\r\n    playButton.style.background = `url(./assets/svg/play.svg)`;\r\n    playButton.style.backgroundSize = 'contain';\r\n\r\n    track.pause();\r\n}\r\n\r\nfunction prevSong() {\r\n    trackIndex--;\r\n\r\n    if(trackIndex < 0) {\r\n        trackIndex = tracks.length - 1;\r\n    }\r\n\r\n    loadSong(tracks[trackIndex]);\r\n\r\n    playSong();\r\n}\r\n\r\nfunction nextSong() {\r\n    trackIndex++;\r\n\r\n    if(trackIndex > tracks.length - 1) {\r\n        trackIndex = 0;\r\n    }\r\n\r\n    loadSong(tracks[trackIndex]);\r\n\r\n    playSong();\r\n}\r\n\r\nfunction updateProgress(e) {\r\n    const {duration, currentTime} = e.srcElement;\r\n    const progressPercent = (currentTime / duration) * 100;\r\n    progress.style.width = `${progressPercent}%`;\r\n}\r\n\r\nfunction setProgress(e) {\r\n    const width = this.clientWidth;\r\n    const clickX = e.offsetX;\r\n    const duration = track.duration;\r\n\r\n    track.currentTime = (clickX / width) * duration;\r\n}\r\n\r\nfunction changeVolume() {\r\n    track.volume = volumeProgress.value;\r\n}\r\n\r\nfunction turnOffVolume(e) {\r\n    if(!e.target.classList.contains('mute')) {\r\n        volumeButton.classList.add('mute');\r\n        track.volume = 0;\r\n    } else {\r\n        volumeButton.classList.remove('mute');\r\n        track.volume = 0.5;\r\n    }\r\n}\r\n\r\n\r\n// Event listeners\r\nplayButton.addEventListener('click', () => {\r\n    const isPlaying = audioBar.classList.contains('play');\r\n\r\n    if(isPlaying) {\r\n        pauseSong();\r\n    } else {\r\n        playSong();\r\n    }\r\n})\r\n\r\nprevButton.addEventListener('click', prevSong);\r\nnextButton.addEventListener('click', nextSong);\r\nvolumeButton.addEventListener('click', turnOffVolume)\r\ntrack.addEventListener('timeupdate', updateProgress);\r\ntrack.addEventListener('ended', nextSong);\r\nprogressContainer.addEventListener('click', setProgress);\r\nvolumeProgress.addEventListener('change', changeVolume);\r\n\n\n//# sourceURL=webpack://momentum/./src/js/audio.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/audio.js"]();
/******/ 	
/******/ })()
;