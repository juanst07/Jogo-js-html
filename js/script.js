const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let loop = null;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

function startGame() {
    // Reinicia o Mario e o cano caso o jogo já tenha sido jogado
    mario.src = './imagens/mario.gif';
    mario.style.width = '';
    mario.style.marginLeft = '';
    mario.style.bottom = '';
    mario.style.animation = '';
    pipe.style.animation = '';
    pipe.style.left = '';

    document.addEventListener('keydown', jump);

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

            document.getElementById('restart-btn').style.display = 'block';
        }
    }, 10);
}

window.onload = () => {
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const gameBoard = document.querySelector('.game-board');
    if (startBtn && gameBoard) {
        startBtn.addEventListener('click', () => {
            startGame();
            gameBoard.style.display = 'block';
            startBtn.style.display = 'none';
            restartBtn.style.display = 'none';
        });
    }
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            restartBtn.style.display = 'none';
            startGame();
        });
    }
}