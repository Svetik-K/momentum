import './style.css'
import {showTime} from './calender'
import Weather from './weather'

showTime();
let today = new Weather(23)
console.log(today.getTemperature())


