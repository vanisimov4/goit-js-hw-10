import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let userSelectedDate;
const buttonStart = document.querySelector('button[data-start]');
buttonStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      window.alert("Please choose a date in the future");
      buttonStart.disabled = true;
    } else { 
      buttonStart.disabled = false;
      userSelectedDate = selectedDates[0];
    }
        console.log(userSelectedDate);
  },
};

flatpickr("input#datetime-picker", options);

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

function addLeadingZero(value) { 
  padStart();
}




// const markup = images
//   .map(
//     image => `<li class='gallery-item'>
//   <a class='gallery-link' href='${image.original}'>
//     <img
//       class='gallery-image'
//       src='${image.preview}'
//       alt='${image.description}'
//     />
//   </a>
// </li>`
//   )
//   .join('');

// listImages.insertAdjacentHTML('afterbegin', markup);


