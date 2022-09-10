// CONSTANTS //

let desertGame, forestGame

let explorePubMedia = [



]


// VARIABLES //

let winner


// CACHED ELEMENT REFERENCES //

const playGameBtn = document.getElementById('playGame-btn')
const introEl = document.getElementById('intro')
const titleEl = document.getElementById('title')
const searchDesertBtn = document.getElementById('searchDesertBtn')


// let playGameBtn = document.getElementById('playgame-btn')


// EVENT LISTENERS //

playGameBtn.addEventListener('click', handleClick)

searchDesertBtn.addEventListener('click', renderDesertGame)



// explorePubBtn.addEventListener('click', explorePub)
// searchDesertBtn.addEventListener('click', renderDesertGame)
// searchForestBtn.addEventListener('click', renderForestGame)

// playDesertGameBtn.addEventListener('click', desertGameTimer)
// desertBoard.addEventListener('click', desertBoardClick)
// resetDesertGameBtn.addEventListener('click', renderDesertGame)

// playForestGameBtn.addEventListener('click', forestGameTimer)
// forestBoard.addEventListener('click', forestBoardClick)
// resetForestGameBtn.addEventListener('click', renderForestGame)

// returnToPubBtn.addEventListener('click', playGame)

// deliverAssetBtn.addEventListener('click', deliverAssetEnding)
// harborChildBtn.addEventListener('click', harborChildEnding)


// FUNCTIONS // 

function handleClick() {
  introEl.style = "display: none"
  titleEl.style = "display: none"
  playGameBtn.style = "display: none"

  let searchForestBtn = document.createElement('button');
    searchForestBtn.innerText = "Search the Forest";
    searchForestBtn.setAttribute('id', 'searchForestBtn')
    document.body.appendChild(searchForestBtn);

  let searchDesertBtn = document.createElement('button');
    searchDesertBtn.innerText = "Search the Desert";
    searchDesertBtn.setAttribute('id', 'searchDesertBtn')
    document.body.appendChild(searchDesertBtn);

  let explorePubBtn = document.createElement('button')
    explorePubBtn.innerText = "Explore the Pub"
    explorePubBtn.setAttribute('id', 'explorePubBtn')
    document.body.appendChild(explorePubBtn);
  // begin interval lines of intro text on title hover
  // animate Divs to scroll up the page and disappear
}

// function explorePub() {
//   // each pub button displays different media/graphic (short videos) on click
// }

function renderDesertGame() {

  searchForestBtn.style = "display: none"
  searchDesertBtn.style = "display: none"
  explorePubBtn.style = "display: none"
  // create & display desert game board
  // create & display resetDesertGameBtn button
  // create & display returnToPubBtn -- calls playGame()
  // randomize location of the child with each reset
}

function renderForestGame() {

  // display desert board
  // randomize location of the child with each reset
}

function desertGameTimer() {
  // begin timer
  // stop game at timer end
}

function desertBoardClick() {
  // show jawas or 'the child'
  // stop game when timer ends
}


function forestGameTimer() {
  // begin timer
  // stop game at timer end - options back to pub or reset game
}

function forestBoardClick() {
  // show jawas or 'the child'
  // stop game when timer ends
}

function returnToPub() {
  playGame();
}

function deliverAssetEnding() {
  // create and display paragraph ending for deliver asset
  // create play game again button that calls playGame()
}

function harborChildEnding() {
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


