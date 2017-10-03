// target your button and assign an ask function that outputs a random image to your page
const askButton = document.querySelector('.btn');
const eightBall = document.querySelector('#eightBall');
const inputField = document.querySelector('input');

let randomNumber = Math.floor(Math.random() * 19) + 1;

askButton.addEventListener('click', () => {
    if (!inputField.value) {
        alert('Please type in a question.');
    } else {
        eightBall.src = `img/magic8ball_${randomNumber}.png`;
        inputField.value = '';
        randomNumber = Math.floor(Math.random() * 19) + 1;
    }
});

