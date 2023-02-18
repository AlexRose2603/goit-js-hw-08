// +++1.Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// 2.Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// +++3.Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// 4.Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formData = {
  email: formEl.email.value,
  message: formEl.message.value,
};
formEl.addEventListener('input', throttle(onFormInput, 500));
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', onFormInput);
getDataFromStorage();
function getDataFromStorage(key) {
  JSON.parse(localStorage.getItem(key));
}
getValuesBack();
function getValuesBack(form) {
  const savedValues = localStorage.getItem(STORAGE_KEY);

  if (localStorage.getItem(formData)) {
    const formData = JSON.parse(localStorage.getItem(formData));
  }
  for (const key in formData) {
    formEl.elements[key].value = formData[key];
  }
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
  console.log(`Email: ${email.value}, Message: ${message.value}`);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

restoreUserData();
function restoreUserData() {
  let savedUserData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedUserData) {
    Object.entries(savedUserData).forEach(([key, value]) => {
      formEl.elements[key].value = value;
    });
  }
}
