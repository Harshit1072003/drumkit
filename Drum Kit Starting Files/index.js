//---------- To Detect which button is pressed--------//
var x = document.querySelectorAll(".drum").length; //FINDING NO. OF BUTTONS

for (var i = 0; i < x; i++)
  document.querySelectorAll("button")[i].addEventListener("click", handle);

function handle() {
  // FOR MAKING SOUND USING CLICK

  var buttonInnerHtml = this.innerHTML;
  makesound(buttonInnerHtml);
}

document.addEventListener("keypress", function (event) {
  // TO MAKE SOUND USING KEYS
  makesound(event.key);
});

//-----------To Detect Which key is pressed------------//
function makesound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();

      break;

    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();

      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();

      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();

      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();

      break;

    default:
      break;
  }
}
