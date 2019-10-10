const form = document.querySelector('#form');

form.addEventListener('submit', sumbmitEmail);

function sumbmitEmail(e) {
    e.preventDefault();
    window.location.href = 'https://www.freecodecamp.com/email-submit';
}