
async function getJoke() {
    const response = await fetch URL(');
    const data = await response.json();

    let jokeText = '';
    if (data.type === 'single') {
      jokeText = data.joke;
    } else {
      jokeText = `${data.setup} ... ${data.delivery}`;
    }

    document.getElementById('joke').innerText = jokeText;

    // Toca o som
    const sound = document.getElementById('laughSound');
    sound.currentTime = 0;
    sound.play();
  }
  