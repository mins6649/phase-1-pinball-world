fetch("http://localhost:3000/games")
.then(res => res.json())
.then(data =>{
    renderGameDisplay(data[0]);
    data.forEach (game =>{
        renderGameList(game)
    })
})

const gameList = document.getElementsByClassName("game-list")[0];
const form = document.getElementById("high-score-form");
let gameImage = document.getElementById("detail-image");
let gameName = document.getElementById("detail-title");
let highscore = document.getElementById("detail-high-score");
let newScore;

function renderGameList(game){
    let gameTitle = document.createElement("h5")
    gameTitle.textContent = `${game.name} (${game.manufacturer_name})`
    gameList.appendChild(gameTitle);

    gameTitle.addEventListener("click", () => renderGameDisplay(game));
}

function renderGameDisplay(game){
    gameImage.src = game.image;
    gameName.textContent = game.name;
    highscore.textContent = game.high_score;
    newScore = game
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    newScore.high_score = e.target["score-input"].value;
    highscore.textContent = newScore.high_score;

    form.reset();
});

    // const newHighScore ={
    //     high_score: e.target["score-input"].value
    // }

//     fetch(`http://localhost:3000/games/${newScore.id}`, {
//     method: "PATCH",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(newHighScore)
//   })
//   .then(res => res.json())
//   .then(data => {
//     // updating detailed info with the updated ramen
//     renderGameDisplay(data)
//   })

//   // resetting the form
//   e.target.reset()
