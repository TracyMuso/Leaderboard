import './styles.css';
import { post, getScores } from './modules/fetchAPI';

// const addToBoard = (game) => {
//     post(game.user, game.score);
//   };

const form = document.getElementById('form');
const player = document.getElementById('name');
const playerScore = document.getElementById('score');
const error = document.getElementById('error')
const refreshBtn = document.querySelector('.btn1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    post()
    player.value = '';
    playerScore.value = '';
    // if (player.value = '' && playerScore.value = '') {
    //     setTimeout(() => {error.innerHTML = 'Please fill in all fields';}, 3000);
    //  }
});

refreshBtn.addEventListener('click', () => {
  getScores();
  window.location.reload()
});

window.onload = getScores();
