var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//detectando qual o botao foi clicado

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var drumClicked = this.innerHTML;

    makeSound(drumClicked);
    buttomAnimation(drumClicked);

    });

}

//Detectando qual tecla foi pressionada

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttomAnimation(event.key);
});

//Funcao para tocar o som de acordo com a tecla pressionada ou botao clicado

    function makeSound(key) {
      switch (key) {
        case "w":
          var sound4 = new Audio("sounds/tom-1.mp3");
          sound4.play();
          break;
        case "a":
          var sound5 = new Audio("sounds/tom-2.mp3");
          sound5.play();
          break;
        case "s":
          var sound6 = new Audio("sounds/tom-3.mp3");
          sound6.play();
          break;
        case "d":
          var sound7 = new Audio("sounds/tom-4.mp3");
          sound7.play();
          break;
        case "j":
          var sound3 = new Audio("sounds/snare.mp3");
          sound3.play();
          break;
        case "k":
          var sound1 = new Audio("sounds/crash.mp3");
          sound1.play();
          break;
        case "l":
          var sound2 = new Audio("sounds/kick-bass.mp3");
          sound2.play();
          break;
        default:
          break;
      }
    }
  
// funcao para animar o botao pressionado ou clicado.

function buttomAnimation(currentKey){

    var activeButtom = document.querySelector("." + currentKey);
    activeButtom.classList.add("pressed");
    setTimeout(function(){
        activeButtom.classList.remove("pressed");
    }, 100)
}
