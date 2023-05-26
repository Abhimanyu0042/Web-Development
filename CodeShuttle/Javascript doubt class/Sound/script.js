const button = document.querySelector('button');

button.addEventListener('click',() => {
    const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-1.mp3');
    audio.play();
})