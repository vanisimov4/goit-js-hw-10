import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// const timerForm { }

const spanDays = document.querySelector('.value[data-days]');
const spanHours = document.querySelector('.value[data-hours]');
const spanMinutes = document.querySelector('.value[data-minutes]');
const spanSeconds = document.querySelector('.value[data-seconds]');
const buttonStart = document.querySelector('button[data-start]');
const inputTimer = document.querySelector('input#datetime-picker');
let userSelectedDate;
buttonStart.disabled = true;
buttonStart.addEventListener('click', hundleBtnClick);
let diff;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      iziToast.error({
        messageColor: 'white',
        color: '#EF4040', // blue, red,
        displayMode: 'once', // once, replace
        position: 'topRight', // bottomRight, bottomLeft, topRight,
        message: 'Please choose a date in the future',
      });
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr(inputTimer, options);

function hundleBtnClick() {
  diff = userSelectedDate - Date.now();
  buttonStart.disabled = true;
  inputTimer.disabled = true;
  console.log(convertMs(Date.now()));
  const intervalId = setInterval(() => {
    diff = diff - 1000;
    if (diff <= 0) {
      clearInterval(intervalId);
    } else {
      const objTime = addLeadingZero(diff);
      spanDays.innerHTML = objTime.days;
      spanHours.innerHTML = objTime.hours;
      spanMinutes.innerHTML = objTime.minutes;
      spanSeconds.innerHTML = objTime.seconds;
    }
  }, 1000);
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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero() {
  const formatTime = convertMs(diff);
  const days = formatTime.days.toString().padStart(2, '0');
  const hours = formatTime.hours.toString().padStart(2, '0');
  const minutes = formatTime.minutes.toString().padStart(2, '0');
  const seconds = formatTime.seconds.toString().padStart(2, '0');
  return { days, hours, minutes, seconds };
}
