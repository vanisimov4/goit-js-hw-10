const inputDelay = document.querySelector('input[name="delay"]');

console.log(inputDelay);


// const STORAGE_KEY = 'feedback-form-state';

// const form = document.querySelector('form.feedback-form');

// form.addEventListener('input', handleFormInput);
// form.addEventListener('submit', handleFormSubmit);

// function handleFormInput() {
//   const email = form.elements.email.value.trim();
//   const message = form.elements.message.value.trim();
//   const objForm = {
//     email,
//     message,
//   };
//   saveToLS(STORAGE_KEY, objForm);
// }

// function handleFormSubmit(event) {
//   event.preventDefault();

//   if (form.elements.email.value === '' || form.elements.message.value === '') {
//     return alert('All form fields must be filled in');
//   }
//   const data = loadFromLS(STORAGE_KEY);
//   console.log(data);
//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// }

// function saveToLS(key, value) {
//   const zip = JSON.stringify(value);
//   localStorage.setItem(key, zip);
// }

// function loadFromLS(key) {
//   const zip = localStorage.getItem(key);
//   try {
//     return JSON.parse(zip);
//   } catch {
//     return zip;
//   }
// }

// function init() {
//   const data = loadFromLS(STORAGE_KEY) || {};
//   form.elements.email.value = data.email || '';
//   form.elements.message.value = data.message || '';
// }

// init();
