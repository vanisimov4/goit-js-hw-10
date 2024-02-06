import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate;
const buttonStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      buttonStart.disabled = true;
    } else { 
buttonStart.disabled = false;
    }
        console.log(userSelectedDate);
  },
};

flatpickr("input#datetime-picker", options);



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


