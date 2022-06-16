const mario = document.querySelector('.game__board-mario');
const pipe = document.querySelector('.game__board-pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'assets/img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '40px';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);