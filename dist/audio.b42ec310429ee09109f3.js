/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist */ \"./src/js/playlist.js\");\n\r\n\r\nconst playButton = document.querySelector('.button_play');\r\nconst prevButton = document.querySelector('.button_prev');\r\nconst nextButton = document.querySelector('.button_next');\r\nconst playlist = document.querySelector('.playlist');\r\nconst title = document.querySelector('.track-title');\r\nconst timer = document.querySelector('.timer');\r\nconst duration = document.querySelector('.track-duration');\r\nconst track = document.querySelector('.track');\r\nconst progressContainer = document.querySelector('.progress-container');\r\nconst progress = document.querySelector('.progress');\r\nconst audioBar = document.querySelector('.audio-player__info');\r\nconst volumeProgress = document.querySelector('.volume-progress');\r\nconst volumeButton = document.querySelector('.button_volume');\r\n\r\n// Load playlist\r\n_playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(song => {\r\n    const li = document.createElement('li');\r\n    li.classList.add('playlist__item');\r\n    li.textContent = song.title;\r\n    const button = document.createElement('button');\r\n    button.classList.add('button','button_play-track');\r\n    li.prepend(button);\r\n    playlist.append(li);\r\n})\r\nlet trackIndex = 0;\r\n\r\nloadSong(_playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"][trackIndex]);\r\nsetActiveClass(trackIndex)\r\n\r\nfunction setActiveClass(index) {\r\n    const playlistTracks = document.querySelectorAll('.playlist__item');\r\n    playlistTracks[index].classList.add('active');\r\n}\r\n\r\nfunction removeActiveClass(index) {\r\n    const playlistTracks = document.querySelectorAll('.playlist__item');\r\n    playlistTracks[index].classList.remove('active');\r\n}\r\n\r\nfunction loadSong(song) {\r\n    title.textContent = song.title;\r\n    track.src = `./assets/sounds/${song.title}.mp3`;\r\n    duration.textContent = song.duration;\r\n    track.currentTime = 0;\r\n    track.volume = 0.2;\r\n\r\n}\r\n\r\nfunction playSong() {\r\n    audioBar.classList.add('play');\r\n    playButton.style.background = `url(./assets/svg/pause.svg)`;\r\n    playButton.style.backgroundSize = 'contain';\r\n    \r\n    track.play();\r\n}\r\n\r\nfunction pauseSong() {\r\n    audioBar.classList.remove('play');\r\n    playButton.style.background = `url(./assets/svg/play.svg)`;\r\n    playButton.style.backgroundSize = 'contain';\r\n\r\n    track.pause();\r\n}\r\n\r\nfunction prevSong() {\r\n    removeActiveClass(trackIndex);\r\n    trackIndex--;\r\n\r\n    if(trackIndex < 0) {\r\n        trackIndex = _playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1;\r\n    }\r\n\r\n    loadSong(_playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"][trackIndex]);\r\n    setActiveClass(trackIndex);\r\n    playSong();\r\n}\r\n\r\nfunction nextSong() {\r\n    removeActiveClass(trackIndex);\r\n    trackIndex++;\r\n\r\n    if(trackIndex > _playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1) {\r\n        trackIndex = 0;\r\n    }\r\n\r\n    loadSong(_playlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"][trackIndex]);\r\n    setActiveClass(trackIndex);\r\n    playSong();\r\n}\r\n\r\nfunction updateProgress(e) {\r\n    const {duration, currentTime} = e.srcElement;\r\n    const progressPercent = (currentTime / duration) * 100;\r\n    progress.style.width = `${progressPercent}%`;\r\n}\r\n\r\nfunction setProgress(e) {\r\n    const width = this.clientWidth;\r\n    const clickX = e.offsetX;\r\n    const duration = track.duration;\r\n\r\n    track.currentTime = (clickX / width) * duration;\r\n}\r\n\r\nfunction changeVolume() {\r\n    track.volume = volumeProgress.value;\r\n}\r\n\r\nfunction turnOffVolume(e) {\r\n    if(!e.target.classList.contains('mute')) {\r\n        volumeButton.classList.add('mute');\r\n        track.volume = 0;\r\n    } else {\r\n        volumeButton.classList.remove('mute');\r\n        track.volume = 0.5;\r\n    }\r\n}\r\n\r\n\r\n// Event listeners\r\nplayButton.addEventListener('click', () => {\r\n    const isPlaying = audioBar.classList.contains('play');\r\n\r\n    if(isPlaying) {\r\n        pauseSong();\r\n    } else {\r\n        playSong();\r\n    }\r\n})\r\n\r\nprevButton.addEventListener('click', prevSong);\r\nnextButton.addEventListener('click', nextSong);\r\nvolumeButton.addEventListener('click', turnOffVolume)\r\ntrack.addEventListener('timeupdate', updateProgress);\r\ntrack.addEventListener('ended', nextSong);\r\nprogressContainer.addEventListener('click', setProgress);\r\nvolumeProgress.addEventListener('change', changeVolume);\r\n\n\n//# sourceURL=webpack://momentum/./src/js/audio.js?");

/***/ }),

/***/ "./src/js/playlist.js":
/*!****************************!*\
  !*** ./src/js/playlist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tracks = [\r\n    {\r\n        title: 'Aqua Caelestis',\r\n        src: '../assets/sounds/Aqua Caelestis.mp3',\r\n        duration: '00:39'\r\n    },\r\n    {\r\n        title: 'Ennio Morricone',\r\n        src: '../assets/sounds/Ennio Morricone.mp3',\r\n        duration: '01:37'\r\n    },\r\n    {\r\n        title: 'River Flows In You',\r\n        src: '../assets/sounds/River Flows In You.mp3',\r\n        duration: '01:37'\r\n    },\r\n    {\r\n        title: 'Summer Wind',\r\n        src: '../assets/sounds/Summer Wind.mp3',\r\n        duration: '01:50'\r\n    }\r\n]\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tracks);\n\n//# sourceURL=webpack://momentum/./src/js/playlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/audio.js");
/******/ 	
/******/ })()
;