// CONSTANTS //

// let desertGame, forestGame

let timeLeft = 10;

let pubMedias = [
  './media/gifs/disintegratejawa.gif',
  './media/gifs/babyyodawhiteclaw.gif',
  './media/gifs/mandonewarmor.gif',
  './media/gifs/flyinggrogu.gif',
  './media/gifs/thisistheway.gif',
  './media/gifs/happybabyyoda.gif',
  './media/gifs/ihavespoken.gif',
  './media/gifs/entersdramatically.gif',
  './media/gifs/mandocoffee.gif',
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

let winningGifs = [
  './media/gifs/babyyodawin.gif',
]

const mandalorianSong = new Audio("../audio/mandalorian.mp3");

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
const pubIntro = document.getElementById('pubIntro')

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
mandalorianSong.play();

searchDesertBtn.style.display = "none"
searchForestBtn.style.display = "none"
explorePubBtn.style.display = "none"
returnToPubBtn.style.display = "none"
deliverAssetBtn.style.display = "none"
harborChildBtn.style.display = "none"
resetGameBtn.style.display = "none"
forestTimer.style.display = "none"
desertTimer.style.display = "none"


if (typeof mandalorianSong.loop === 'boolean') {
  mandalorianSong.loop = true;
  mandalorianSong.volume = .4;
  mandalorianSong.play();
}

function handlePlayClick() {
  forestBoard.style.display = "none"
  desertBoard.style.display = "none"
  forestTimer.style.display = "none"
  desertTimer.style.display = "none"

  titleEl.style.display = "none"
  playGameBtn.style.display = "none"
  returnToPubBtn.style.display = "none"

  introEl.style.display = "block"
  explorePubBtn.style.display = "block"
  searchForestBtn.style.display = "block"
  searchDesertBtn.style.display = "block"

  introEl.textContent = 'Welcome, Mando. Your client has hired you to find a high-value asset. Before you set out on your search to the Forest or the Desert of Assembly, take a minute to explore the pub.'
}

function firstPubGif() {
  let pubGif = document.createElement('img')
  let randomPubMedia = pubMedias[Math.floor(Math.random() * pubMedias.length)]
  pubGif.setAttribute('src', randomPubMedia)

  pubMediaDiv.appendChild(pubGif)
}

function explorePub() {
  returnToPubDiv.innerHTML = ""
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
  let timeLeft = 10;

  introEl.textContent = "Welcome to the Desert of Assembly. Click on each grid square to try and find The Asset! But hurry, you only have 10 seconds to complete your mission, and the time's already started."

  returnToPubBtn.style.display = "none";
  desertTimer.style.display = "block";

  let desertCountdown = setInterval(function () {

    if (timeLeft > 0) {
      timeLeft -= 1;
    }

    desertTimer.textContent = timeLeft + ' seconds remaining'

    if (timeLeft === 0) {

      introEl.textContent = ""
      desertTimer.textContent = "Time's up! I'm sorry Mando, you must head back to the pub and try your search again. Maybe The Asset is in the Forest of Assembly?"

      desertBoard.style.display = "none";
      returnToPubDiv.style.display = "none";
      returnToPubBtn.style.display = "block";

      clearInterval(desertCountdown);
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
    forestTimer.style.display = "none";
    desertTimer.style.display = "none";
    returnToPubBtn.style.display = "none";

    deliverAssetBtn.style.display = "block";
    harborChildBtn.style.display = "block";

    introEl.textContent = "You found The Asset in the Desert of Assembly, and it appears to be a Child!"
    winnerDiv.textContent = "Now you must choose what to do with it. Do you harbor The Child and bring it to safety, or do you deliver The Asset to your client and collect on your bounty?"

    let winGif = document.createElement('img');
    winGif.setAttribute('src', winningGifs[0]);
    winnerDiv.appendChild(winGif);
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
  let timeLeft = 10;

  introEl.textContent = "Welcome to the Forest of Assembly. Click on each grid square to try and find The Asset! But hurry, you only have 10 seconds to complete your mission, and the time's already started."

  returnToPubBtn.style.display = "none";
  forestTimer.style.display = "block";

  let forestCountdown = setInterval(function () {

    if (timeLeft > 0) {
      timeLeft -= 1;
    }

    forestTimer.textContent = timeLeft + ' seconds remaining'

    if (timeLeft === 0) {

      introEl.textContent = ""
      forestTimer.textContent = "Time's up! I'm sorry Mando, you must head back to the pub and try your search again. Maybe The Asset is in the Desert of Assembly?"

      forestBoard.style.display = "none";
      returnToPubDiv.style.display = "none";
      returnToPubBtn.style.display = "block";

      clearInterval(forestCountdown);
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

    deliverAssetBtn.style.display = "block";
    harborChildBtn.style.display = "block";

    introEl.textContent = "You found The Asset in the Forest of Assembly, and it appears to be a Child!"
    winnerDiv.textContent = "Now you must choose what to do with it. Do you harbor The Child and bring it to safety, or do you deliver The Asset to your client and collect on your bounty?"

    let winGif = document.createElement('img');
    winGif.setAttribute('src', winningGifs[0]);
    winnerDiv.appendChild(winGif);
  }
  console.log('this is the winning div index ', randomSqIdx);
}

function returnToPub() {
  introEl.textContent = 'Welcome back to the Pub, Mando. Before you set out on your next bounty hunt, take a minute to explore.'
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

  deliverAssetEnd.innerHTML = "";
  introEl.textContent = "You decided to deliver The Asset to your client and collect on your bounty."
  let assetStory = document.createElement('div');
  assetStory.innerHTML = `You'll live with this guilt for the rest of your child-free existence. Or not, you might just enjoy that disposable income from that rewarding career in bounty hunting and live a life of uninhibited adventure. You collect on your bounty and never think about The Child again. Great work, Mando. Go forth and find other bounties to hunt and collect upon. The End...for now.`;
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

  deliverAssetEnd.innerHTML = "";
  introEl.textContent = "You decided to harbor The Child and become a fugitive. Your client will be very, very angry. And it is highly likely that the old Imperial Army will send Stormtroopers after you to find this valuable Asset they so badly want."
  let assetStory = document.createElement('div');
  assetStory.innerHTML = "Had you known your bounty mission was to recover a Child, you likely would not have accepted. While you do not dare call yourself a parent, you now are responsible for protecting The Child and bringing it somewhere safe. Probably time to consider trading the spaceship in for a minivan. Go forth and find the rightful place for this Child of unknown species. Be safe on your journey. The End...for now.";
  deliverAssetEnd.appendChild(assetStory);
}

