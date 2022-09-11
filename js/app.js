// CONSTANTS //

// let desertGame, forestGame

let timeLeft = 15;

let pubMedia = [
  './media/gifs/disintegratejawa.gif',
  './media/gifs/babyyodawin.gif',
]

let desertPics = [
  './media/desertpics/jawa.jpg',
  './media/desertpics/rhino.jpg',
  './media/desertpics/MandoJawas.jpg',
  './media/desertpics/jawas.jpg',
  './media/desertpics/blurrgs.jpg',
  './media/desertpics/jawaship.jpg',
  './media/desertpics/spoken.jpg',
  './media/desertpics/blurrgs2.jpg',
  './media/desertpics/mandoship.jpg',
]

let forestPics = [
  './media/forestpics/forest1.jpg',
  './media/forestpics/forest2.jpg',
  './media/forestpics/forest3.jpg',
  './media/forestpics/forest4.jpg',
  './media/forestpics/forest5.jpg',
]

let winningGif = [
  './media/gifs/babyyodawin.gif',
]


// VARIABLES aka STATE //

let winner
let randomSqIdx = Math.floor(Math.random() * 36);


// CACHED ELEMENT REFERENCES //

const playGameBtn = document.getElementById('playGameBtn')
const introEl = document.getElementById('intro')
const titleEl = document.getElementById('title')
const desertBoard = document.getElementById("desertBoard")
const forestBoard = document.getElementById("forestBoard")
const squareEls = document.querySelectorAll('.square')
const pubMediaDiv = document.getElementById('pubMedia')
const desertTimer = document.getElementById('desertTimer')
const winnerDiv = document.getElementById('winDiv')

// EVENT LISTENERS //

playGameBtn.addEventListener('click', handlePlayClick);

searchForestBtn.addEventListener('click', renderForestGame);
searchDesertBtn.addEventListener('click', renderDesertGame);
explorePubBtn.addEventListener('click', explorePub);
returnToPubBtn.addEventListener('click', returnToPub);

desertBoard.addEventListener('click', playDesertGame)
desertBoard.addEventListener('click', desertWinner)
forestBoard.addEventListener('click', playForestGame)
forestBoard.addEventListener('click', forestWinner)


deliverAssetBtn.addEventListener('click', deliverAssetEnding);
harborChildBtn.addEventListener('click', harborChildEnding);


// FUNCTIONS //
searchDesertBtn.style.display = "none"
searchForestBtn.style.display = "none"
explorePubBtn.style.display = "none"
returnToPubBtn.style.display = "none"
deliverAssetBtn.style.display = "none"
harborChildBtn.style.display = "none"

function handlePlayClick() {
  introEl.style.display = "none"
  titleEl.style.display = "none"
  playGameBtn.style.display = "none"
  returnToPubBtn.style.display = "none"

  explorePubBtn.style.display = "block"
  searchForestBtn.style.display = "block"
  searchDesertBtn.style.display = "block"
}

function firstPubGif() {
  let pubGif = document.createElement('img')
  let randomPubMedia = pubMedia[Math.floor(Math.random() * pubMedia.length)]
  pubGif.setAttribute('src', randomPubMedia)

  pubMediaDiv.appendChild(pubGif)
}

function explorePub() {
  winnerDiv.hidden = true;
  pubMediaDiv.innerHTML = ""
  pubMediaDiv.hidden = false;

  firstPubGif();

  desertTimer.textContent = ""
  desertTimer.style.display = "none"
  forestBoard.style.display = "none";
  desertBoard.style.display = "none";
}

function initDesert() {
  desertBoard = [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
  ]
  winner = null;

  renderDesertGame()
}

function renderDesertGame() {
  pubMediaDiv.hidden = true;
  forestBoard.style.display = "none";
  desertBoard.style.display = "grid"

  console.log('this is the desert game');

  searchForestBtn.style.display = "none";
  explorePubBtn.style.display = "none";
  searchDesertBtn.style.display = "none";
  returnToPubBtn.style.display = "block";

  let count = 0;
  for (i = 0; i < 36; i++) {

    let div = document.createElement('div');
    div.className = "square";
    div.id = `sq${count}`;
    let desertImg = document.createElement('img')
    let randomDesertPic = desertPics[Math.floor(Math.random() * desertPics.length)]
    desertImg.setAttribute('src', randomDesertPic)

    div.appendChild(desertImg)
    count++;
    desertBoard.appendChild(div);
  }
  console.log('this is the', desertBoard)
}

function playDesertGame() {
  desertTimer.style.display = "block"

  let desertCountdown = setInterval(function () {
    timeLeft -= 1;

    desertTimer.textContent = timeLeft + ' seconds remaining'

    if (timeLeft === 0) {
      desertTimer.textContent = `You didn't find the asset! Head back to the pub and try again.`
      desertBoard.style.display = "none"
      desertBoard.style.display = "none"
      clearInterval(desertCountdown);
    }
  }, 1000)
}

function desertWinner(event) {

  console.log(event.target.parentElement.id)

  let sqIdx = parseInt(event.target.parentElement.id.replace('sq', ''))

  console.log('this is the index of the clicked div', sqIdx)

  if (sqIdx === randomSqIdx) {
    winnerDiv.hidden = false;
    forestBoard.style.display = "none";

    let winGif = document.createElement('img')
    winGif.setAttribute('src', pubMedia[1])

    winnerDiv.appendChild(winGif)
    desertTimer.textContent = `YOU FOUND BABY YODA!`

    deliverAssetBtn.style.display = "block"
    harborChildBtn.style.display = "block"
  }
  console.log('this is the winning div index', randomSqIdx)
  desertWinner();
}

function initForest() {
  forestBoard = [
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
    null, null, null, null, null, null,
  ]
  winner = null;

  renderForestGame();
}

function renderForestGame() {
  pubMediaDiv.hidden = true;
  desertBoard.style.display = "none";
  forestBoard.style.display = "grid";

  searchForestBtn.style.display = "none";
  explorePubBtn.style.display = "none";
  searchDesertBtn.style.display = "none";
  returnToPubBtn.style.display = "block";

  let count = 0;
  for (i = 0; i < 36; i++) {

    let div = document.createElement('div');
    div.className = "square";
    div.id = `sq${count}`;
    let forestImg = document.createElement('img')
    let randomForestPic = forestPics[Math.floor(Math.random() * forestPics.length)]
    forestImg.setAttribute('src', randomForestPic)

    div.appendChild(forestImg);
    count++
    forestBoard.appendChild(div);

  }
  console.log('this is the', forestBoard)
}

function playForestGame() {
  forestTimer.style.display = "block"

  let forestCountdown = setInterval(function () {
    timeLeft -= 1;

    forestTimer.textContent = timeLeft + ' seconds remaining'

    if (timeLeft === 0) {
      forestTimer.textContent = `You didn't find the asset! Head back to the pub and try again.`

      forestBoard.hidden = true;

      clearInterval(forestCountdown);
    }
  }, 1000)

  console.log('clicking the forest squares')
}

function forestWinner(event) {

  console.log(event.target.parentElement.id)

  let sqIdx = parseInt(event.target.parentElement.id.replace('sq', ''))

  console.log('this is the index of the clicked div', sqIdx)

  if (sqIdx === randomSqIdx) {
    winnerDiv.hidden = false;
    forestBoard.hidden = true;

    let winGif = document.createElement('img')
    winGif.setAttribute('src', pubMedia[1])

    winnerDiv.appendChild(winGif)
    desertTimer.textContent = `YOU FOUND BABY YODA!`

    deliverAssetBtn.style.display = "block"
    harborChildBtn.style.display = "block"
  }
  console.log('this is the winning div index', randomSqIdx)
  forestWinner();
}

function returnToPub() {
  winnerDiv.hidden = true;
  forestTimer.style.display = ""
  desertTimer.textContent = ""
  returnToPubBtn.style.display = "none"
  explorePubBtn.style.display = "block"
  searchForestBtn.style.display = "block"
  searchDesertBtn.style.display = "block"
  deliverAssetBtn.style.display = "none"
  harborChildBtn.style.display = "none"

  desertBoard.style.display = "none"
  desertBoard.innerHTML = ""
  forestBoard.style.display = "none"
  forestBoard.innerHTML = ""
}

function deliverAssetEnding() {
  desertBoard.hidden = true;
  forestBoard.hidden = true;
  deliverAssetBtn.style.display = "none"
  harborChildBtn.style.display = "none"
  searchForestBtn.style.display = "none"
  explorePubBtn.style.display = "none"
  searchDesertBtn.style.display = "none"
  returnToPubBtn.style.display = "block"

  winnerDiv.display = true;
  document.createElement('div')
  div.createElement('h1')
  h1.innerHTML = "YOU FOUND BABY YODA"
  winnerDiv.appendChild(div)
  // create and display paragraph ending for deliver asset
  // create play game again button that calls playGame()
}

function harborChildEnding() {
  searchForestBtn.style.display = "none"
  explorePubBtn.style.display = "none"
  searchDesertBtn.style.display = "none"
  returnToPubBtn.style.display = "block"

  // create and display paragraph ending for deliver asset
  // create play game again button that calls playGame()
}







// 1. Create opening credits scene
// 1a) Title centered on landing page, animated to move a bit, background music to Mandalorian opening
// 1b) Lines of text in individual <div>s introduce the game, hidden until hover over title
// 1c) Hover over title, reveals story for the plot - delayed animation via timeout? 
// 1d) Story line then animates from bottom of screen to top slowly and fades away (Star Wars-esque)
// 1e) Play Game button appears with styling

// 2. Create "choose your adventure" page - "The Pub" scene
// 2a) Two boxes appear after "Play Game" button is pressed, scene is in the pub
// 2b) On hover, each box produces different gif graphic and sound effect to allude to scene of choice
// 2c) Button options are to click "Desert" scene or "Forest" scene for where to search first
// 2d) Random buttons around "The Pub" will show short video clips from the Mandalorian series

// 3. Create two "game" scenarios - Desert and Forest - based on scene choice from step 2

// 3a) On desert click, render grid game - click dune and cargo images to find "The Asset"
// 3b) Clicks are risks! 35/36 clicks present Jawas that steal your ship parts
// 3c) First Jawa revealed begins a timer
// 3d) Must click to find "The Asset" before the timer expires (very short timer window, 7 sec)
// 3e) On timer expire, grid game is reset and randomizes location of "The Asset" - forces start over
// 3f) Option button to return to "The Pub" scene
// 3g) 1/36 clicks on grid presents "The Asset" - aka, "The Child"

// 3h) On forest click, render grid game - click trees and bamboo shoots to find "The Asset"
// 3i) Clicks are risks! 35/36 clicks present Storm Trooper helmets
// 3j) First Storm Trooper helmet revealed begins a timer
// 3k) Must click to find "The Asset" before the timer expires (very short timer window, 7 sec)
// 3l) On timer expire, grid game is reset and randomizes location of "The Asset" - forces start over
// 3m) Option button to return to "The Pub" scene
// 3n) 1/36 clicks on grid presents "The Asset" - aka, "The Child"

// 4) If click and find "The Asset" aka, "The Child"
// 4a) Story scrolls up the screen in the same manner as the opening credits scene about how you did not know this 50-year old "Asset" was a child...
// 4b) Once story stops, two buttons appear
// 4c) One button is option to deliver "The Asset" to the client as agreed upon for the bounty
// 4d) Other button is option to harbor "The Child" and become a fugitive, evade your client

// 5) Deliver "The Asset" Button - on click, presents a story about sad Baby Yoda, but you're rich now
// 5) Harbor "The Child" Button - on click, presents a story about how you're now responsible for "The Child" and must find Skywalker

// The End // 




// let img = div.createElement('img')
// img.setAttribute("source", "URL") // source for image
// div.appendChild(img) // this appends each image to each div



// randomize the board function
// once the board is random, renderForestGame() based on what's in the board...(images in all the divs face-down...)

// renderTile function to display what's inside of each tile --> set winner being the child...will have to call a getWinner() function
// set up a handleclick for each board position/tile...on each click, then do the game logic...at the end of the handleclick, do the renderTile()

