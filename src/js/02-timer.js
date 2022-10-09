import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inp = document.querySelector('input[id="datetime-picker"]')
const timerDiv = document.querySelector('.timer');
const refs = {
    input:document.querySelector('input[id="datetime-picker"]'),
    btnStart: document.querySelector('button[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds:document.querySelector('[data-seconds]'),
}
let selectedDate = null;

const currentDate = Date.now();


    timerDiv.style.cssText = 
    `display:flex;
justify-content:space-around;
margin-top: 100px;
font-size:25px;
font-weight:bold`
  

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0]>currentDate){
          refs.btnStart.disabled = false;
          selectedDate = selectedDates[0];
      } else{

        refs.btnStart.disabled = true;
        alert ('Please choose a date in the future');
      }
    },
  };
  const fp = flatpickr(refs.input, options);
  let timerId = null;
  refs.btnStart.addEventListener('click', onTimerStart);

  function onTimerStart (){
    timerId = setInterval(() => {
        const difference = selectedDate.getTime() - Date.now();
        refs.input.disabled = true;
        refs.btnStart.disabled = true;
        onTimeStop(difference);
        const convertedMs = convertMs(difference);
        onTimeConvert(convertedMs);
      }, 1000);
  }
  function onTimeStop(difference) {
    if (difference <= 1000) {
      clearInterval(timerId);
      refs.btnStart.disabled = false;
      refs.input.disabled = true;
    }
  }
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  function onTimeConvert({ days, hours, minutes, seconds }) {
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent = addLeadingZero(minutes);
    refs.seconds.textContent = addLeadingZero(seconds);
  }
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
