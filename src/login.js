const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const showClock = document.querySelector('#clock');

const question = document.querySelector('#question');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLogInSubmit() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username) {
    greeting.innerHTML = `How are you? ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLogInSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLogInSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginInput.classList.add(HIDDEN_CLASSNAME);
    question.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
