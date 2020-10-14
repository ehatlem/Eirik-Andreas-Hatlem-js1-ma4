const container = document.querySelector(".container");

const url = "https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function fetchGame() {
    try {
        const response = await fetch(url);
        const gameObject = await response.json();
        const games = gameObject.results;
        createHTML(games);
    }

    catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}

fetchGame();

function createHTML(games) {
    let html = "";
    games.forEach(game => {
        html += `<a href="question3.html?id=${game.id}">
                    <div class="game-item">
                        <h1>${game.name}</h1>
                        <h3>Rating: ${game.rating}/${game.rating_top}</h3>
                        <p>release date: ${game.released}</p> 
                        <img class="game-image" src="${game.background_image}" alt="image from the game '${game.name}'">      
                    </div>
                </a>`;
    });
    container.innerHTML = html;
}

{/* <div class="game-image" style="background-image: url('${game.background_image}')"></div> */ }
{/*  */ }