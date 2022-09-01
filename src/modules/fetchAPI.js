/* eslint-disable no-unused-vars */
const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/viIYUtZdNuIa0PPWUYwJ/scores/';

const player = document.getElementById('name');
const playerScore = document.getElementById('score');

export const post = async () => {
  const res = await fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify({ user: player.value, score: playerScore.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getScores = async () => {
  const table = document.getElementById('board');
  await fetch(requestURL)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        return;
      }

      const highToLow = data.result.sort((a, b) => b.score - a.score);
      highToLow.forEach((element) => {
        const row = document.createElement('tr');
        row.className = 'count';
        const player = document.createElement('td');
        player.className = 'name';
        player.innerHTML = `${element.user}:`;
        const scores = document.createElement('td');
        scores.className = 'score';
        scores.innerHTML = `${element.score}`;
        row.append(player, scores);
        table.appendChild(row);
      });
    });
};
