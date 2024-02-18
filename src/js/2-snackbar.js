import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form.form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delayValue => {
      iziToast.show({
        messageColor: 'white',
        color: '#59a10d',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(error => {
      iziToast.show({
        messageColor: 'white',
        color: '#ef4040',
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
  form.reset();
}
