var length = document.querySelectorAll(".drum").length;

for (var i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var buttonhtml = this.innerHTML;
  makesound(buttonhtml);
  buttonAnimation(buttonhtml);
}

document.addEventListener("keydown", function(e){
   makesound(e.key);
   buttonAnimation(e.key);
})

function makesound(key){

  switch (key) {
    case 'w':
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case 's':
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case 'd':
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case 'j':
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case 'k':
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case 'l':
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed")

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}