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
const deliverAssetEnd = document.getElementById('deliverAssetEnd')
const returnToPubDiv = document.getElementById('returnToPubDiv')
const backgroundDiv = document.getElementById('backgroundDiv')

// EVENT LISTENERS //

playGameBtn.addEventListener('click', handlePlayClick);

searchForestBtn.addEventListener('click', renderForestGame);
searchDesertBtn.addEventListener('click', renderDesertGame);
explorePubBtn.addEventListener('click', explorePub);
returnToPubBtn.addEventListener('click', returnToPub);

searchDesertBtn.addEventListener('click', playDesertGame)
desertBoard.addEventListener('click', desertWinner)
searchForestBtn.addEventListener('click', playForestGame)
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
resetGameBtn.style.display = "none"


function handlePlayClick() {
  forestBoard.style.display = "none";
  desertBoard.style.display = "none";
  forestTimer.style.display ="none";
  desertTimer.style.display = "none";

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
  returnToPubDiv.hidden = true;
  winnerDiv.hidden = true;
  pubMediaDiv.innerHTML = ""
  pubMediaDiv.hidden = false;

  firstPubGif();

  desertTimer.textContent = ""
  desertTimer.style.display = "none"
  forestBoard.style.display = "none"
  desertBoard.style.display = "none"
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
  desertTimer.style.display = "block";

  let desertCountdown = setInterval(function () {
    
    if (timeLeft > 0){
      timeLeft -= 1;
    }

    desertTimer.textContent = timeLeft + ' seconds remaining'
  
    if (timeLeft === 0) {

      desertTimer.textContent = `Time's up! You didn't find the asset! Head back to the pub and try again.`

      desertBoard.style.display = "none";
      returnToPubDiv.style.display = "none";
      
      clearInterval(desertCountdown);

      return;
    }
  }, 1000)
}

function desertWinner(event) {

  let sqIdx = parseInt(event.target.parentElement.id.replace('sq', ''))

  console.log('this is the index of the clicked div', sqIdx)

  if (sqIdx === randomSqIdx) {
    desertBoard.style.display = "none";
    forestBoard.style.display = "none";
    winnerDiv.style.display = "block";
    desertTimer.style.display = "none";
    returnToPubBtn.style.display = "none";

    winnerDiv.textContent = "You found Baby Yoda!"

    let winGif = document.createElement('img');
    winGif.setAttribute('src', pubMedia[1]);
    winnerDiv.appendChild(winGif);

    deliverAssetBtn.style.display = "block";
    harborChildBtn.style.display = "block";
  }
  console.log('this is the winning div index ', randomSqIdx);
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

  forestTimer.style.display = "block";

  let forestCountdown = setInterval(function () {
    
    if (timeLeft > 0){
      timeLeft -= 1;
    }

    forestTimer.textContent = timeLeft + ' seconds remaining'
  
    if (timeLeft === 0) {

      forestTimer.textContent = `Time's up! You didn't find the asset! Head back to the pub and try again.`

      forestBoard.style.display = "none";
      returnToPubDiv.style.display = "none";
      
      clearInterval(forestCountdown);

      return;
    }
  }, 1000)
}

function forestWinner(event) {

  let sqIdx = parseInt(event.target.parentElement.id.replace('sq', ''))

  console.log('this is the index of the clicked div', sqIdx)

  if (sqIdx === randomSqIdx) {
    desertBoard.style.display = "none";
    forestBoard.style.display = "none";
    winnerDiv.style.display = "block";
    forestTimer.style.display = "none";
    returnToPubBtn.style.display = "none";

    winnerDiv.textContent = "You found Baby Yoda!"

    let winGif = document.createElement('img');
    winGif.setAttribute('src', pubMedia[1]);
    winnerDiv.appendChild(winGif);

    deliverAssetBtn.style.display = "block";
    harborChildBtn.style.display = "block";
  }
  console.log('this is the winning div index ', randomSqIdx);
}

function returnToPub() {
  returnToPubDiv.style.display = "block"
  desertTimer.textContent = ""
  forestTimer.textContent = ""
  winnerDiv.style.display = "none"
  forestBoard.style.display = "none"
  desertBoard.style.display = "none"

  returnToPubBtn.style.display = "none"
  deliverAssetBtn.style.display = "none"
  harborChildBtn.style.display = "none"
  deliverAssetEnd.style.display = "none"
  
  explorePubBtn.style.display = "block"
  searchForestBtn.style.display = "block"
  searchDesertBtn.style.display = "block"

  returnToPubDiv.innerHTML = `Welcome back to the pub! All is not lost. Take a minute to explore before setting out on your journey again. You will find The Asset - Mandalorians never fail.`;
}

function deliverAssetEnding() {
  desertBoard.style.display = "none";
  forestBoard.style.display = "none";

  deliverAssetBtn.style.display = "none";
  harborChildBtn.style.display = "none";
  searchForestBtn.style.display = "none";
  explorePubBtn.style.display = "none";
  searchDesertBtn.style.display = "none";
  winnerDiv.style.display = "none";

  deliverAssetEnd.style.display = "block";
  returnToPubBtn.style.display = "block";

  let assetStory = document.createElement('div');
  assetStory.innerHTML = `You'll live with this guilt for the rest of your child-free existence...Or not, you might just enjoy that disposable income from that rewarding career in bounty hunting and live a life of uninhibited adventure. You collect on your bounty and never think about The Child again. The End.`;
  deliverAssetEnd.appendChild(assetStory);

}

function harborChildEnding() {
  desertBoard.style.display = "none";
  forestBoard.style.display = "none";

  deliverAssetBtn.style.display = "none";
  harborChildBtn.style.display = "none";
  searchForestBtn.style.display = "none";
  explorePubBtn.style.display = "none";
  searchDesertBtn.style.display = "none";
  winnerDiv.style.display = "none";

  deliverAssetEnd.style.display = "block";
  returnToPubBtn.style.display = "block";

  let assetStory = document.createElement('div');
  assetStory.innerHTML = "This is the story of harboring the child";
  deliverAssetEnd.appendChild(assetStory);
}

