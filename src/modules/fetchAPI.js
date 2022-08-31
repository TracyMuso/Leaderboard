const postGame = async() => {
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SJKsngpwH6hkWgldofin/scores/';

    const result = await fetch(requestURL, {
        method: 'POST',
        body: JSON.stringify({
            name: 'Tracys leaderboard',
            result: 'Game with ID: SJKsngpwH6hkWgldofin added.'
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', 
        }

    }).then((response) => response.json());
    return result;
}

const postScores = async(score) => {
    const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SJKsngpwH6hkWgldofin/scores/';

    const result = await fetch(requestURL, {
        method: 'POST',
        body: JSON.stringify(score),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json());
      return result;
}
