const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://api.rawg.io/api/games/${id}`;
const container = document.querySelector(".container");

async function fetchGame() {
    console.log(url);
    try {
        const response = await fetch(url);
        const game = await response.json();
        createHTML(game);
    }
    catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}

fetchGame();

function createHTML(game) {
    let html = `<div class="game-item">
                    <h1>${game.name}</h1>
                    <h3>Rating: ${game.rating}/${game.rating_top}</h3>
                    <p>${game.description}</p>
                    <p>release date: ${game.released}</p>
                    <p>Find more info on their <a href="${game.website}">website</a></p> 
                    <a href="question2.html"><button>Back</button></a>   
                    <img class="game-image" src="${game.background_image}" alt="image from the game '${game.name}'">   
                </div>`;
    container.innerHTML = html;
}