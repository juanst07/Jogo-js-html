const mario = document.querySelector('.mario');
const gameOverImg = document.querySelector('.game-over'); // Adicione isso

const jump = () => {
 mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.left = `${marioPosition}px`;

    mario.src = 'img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    if (gameOverImg) {
        gameOverImg.style.display = 'block'; // Mostra a imagem de game over
    }

    clearInterval(loop);

}

},10);

document.addEventListener('keydown', jump);