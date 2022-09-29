
const character = $(".character");
const obstacle = $(".obstacle");
const gameOver = $(".gameOver");
const hr = $("hr");
const startGame = $(".startGame");
// const obstacleAir = $(".obstacleAir");

let interval = null;
let playerScore = 0;

let scoreCounter = function() {
  playerScore++;
  $(".score").html("Score <b>"+playerScore+"</b>");

  // if(playerScore >= 45 && playerScore < 70) {
  //   $(".obstacleActive").css("animation", "block 3s infinite linear");
  // }
}


$(document).on("keydown", function(event) {
  if(event.key === 'Enter') {
    hr.css("display", "block");
    $(".startGame").css("display", "none");
    gameOver.css("display", "none");
    obstacle.addClass("obstacleActive");
    hr.addClass("hrActive");

    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
  }
});

function jump() {
  if(!character.hasClass("jump")) {
    character.addClass("jump");

    setTimeout(function() {
      character.removeClass("jump");
    }, 300);
  }
}

// is there any collison ?
let isGameOver= setInterval(function () {
  let characterTop = parseInt(character.css("top"));
  let obstacleLeft = parseInt(obstacle.css("left"));

  if(characterTop > 230 && obstacleLeft < 50 && obstacleLeft > 0){
    startGame.css("display", "block");
    startGame.html("Press 'Enter' to Replay");
    gameOver.css("display", "block");
    obstacle.removeClass("obstacleActive");
    hr.removeClass("hrActive");
    hr.css("display", "none");
    clearInterval(interval);
    playerScore = 0;
  }
}, 10);

$(document).on("keydown", function(event) {
  if(event.key === 'Spacebar' || event.key === ' ') {
      jump();
  }
});
