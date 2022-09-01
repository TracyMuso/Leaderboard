import './styles.css';
import { post, getScores } from './modules/fetchAPI';

const form = document.getElementById('form');
const refreshBtn = document.querySelector('.btn1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    post()
    player.value = '';
    playerScore.value = '';
});

refreshBtn.addEventListener('click', () => {
  getScores();
  window.location.reload()
});

window.onload = getScores();
