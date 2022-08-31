const populateBoard = (data) => {
    const table = document.getElementById('board');
    if (data) {
        data.result.forEach(element => {
        const row = document.createElement('tr');
        row.className = 'count';
        const name = document.createElement('td');
        name.className = 'player';
        name.innerHTML = `${element.player}`;
        const scores = document.createElement('td');
        scores.className = 'score';
        name.innerHTML = `${element.scores}`;
        row.append(name, scores);
        table.appendChild(row)
    });
    }
}