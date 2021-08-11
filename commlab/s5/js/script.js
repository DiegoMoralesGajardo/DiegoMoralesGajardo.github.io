//definiciones
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
var player5 = document.getElementById("player5");
//botones en bucle 1 y 2

//ni idea como hacerlos

//botones sin bucle 3, 4, 5, 6 y 7
var audios = ["audio/track1.mp3", "audio/track2.mp3", "audio/track3.mp3", "audio/track4.mp3", "audio/track5.mp3"];

var audio1 = document.getElementsByClassName('boton3');
var audio2 = document.getElementsByClassName('boton4');
var audio3 = document.getElementsByClassName('boton5');
var audio4 = document.getElementsByClassName('boton6');
var audio5 = document.getElementsByClassName('boton7');

audio1.addEventListener("click", playAudio1);
audio2.addEventListener("click", playAudio2);
audio3.addEventListener("click", playAudio3);
audio4.addEventListener("click", playAudio4);
audio5.addEventListener("click", playAudio5);

function playAudio1() {
  player1.play();
}
function playAudio2() {
  player2.play();
}
function playAudio3() {
  player3.play();
}
function playAudio4() {
  player4.play();
}
function playAudio5() {
  player5.play();
}
