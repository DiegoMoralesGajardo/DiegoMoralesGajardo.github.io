//definiciones player
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player3 = document.getElementById("player3");
var player4 = document.getElementById("player4");
var player5 = document.getElementById("player5");
var player6 = document.getElementById("player6");
var player7 = document.getElementById("player7");
//botones en bucle 1 y 2
var fondo = ["audio/0.ogg", "audio/1.ogg"];

var fondo1 = document.getElementById('player1');
var fondo2 = document.getElementById('player2');

//botones sin bucle 3, 4, 5, 6 y 7 definiciones audio
var audios = ["audio/track1.ogg", "audio/track2.ogg", "audio/track3.ogg", "audio/track4.ogg", "audio/track5.ogg"];

var audio1 = document.getElementById('player3');
var audio2 = document.getElementById('player4');
var audio3 = document.getElementById('player5');
var audio4 = document.getElementById('player6');
var audio5 = document.getElementById('player7');

//condicionales if else en bucle 1 y 2, falta optimizar el codigo
boton1.addEventListener("click", function() {
  if (player1.paused) {
    player1.play();
    boton1.className = "activo";
  } else {
    player1.pause();
    boton1.className = "boton";
  };
});

boton2.addEventListener("click", function() {
  if (player2.paused) {
    player2.play();
    boton2.className = "activo";
  } else {
    player2.pause();
    boton2.className = "boton";
  };
});

//condicionales if else sin bucle 2, 3, 4, 5, 6, 7, con bloqueo de sobreposicion, falta optimizar el codigo urgente
boton3.addEventListener("click", function() {
  if (player3.paused) {
    player3.play();
    boton3.className = "activo";
    player4.currentTime = 0;
    player4.pause();
    boton4.className = "boton";
    player5.currentTime = 0;
    player5.pause();
    boton5.className = "boton";
    player6.currentTime = 0;
    player6.pause();
    boton6.className = "boton";
    player7.currentTime = 0;
    player7.pause();
    boton7.className = "boton";
  } else {
    player3.currentTime = 0;
    player3.pause();
    boton3.className = "boton";
  };
});

boton4.addEventListener("click", function() {
  if (player4.paused) {
    player4.play();
    boton4.className = "activo";
    player3.currentTime = 0;
    player3.pause();
    boton3.className = "boton";
    player5.currentTime = 0;
    player5.pause();
    boton5.className = "boton";
    player6.currentTime = 0;
    player6.pause();
    boton6.className = "boton";
    player7.currentTime = 0;
    player7.pause();
    boton7.className = "boton";
  } else {
    player4.currentTime = 0;
    player4.pause();
    boton4.className = "boton";
  };
});

boton5.addEventListener("click", function() {
  if (player5.paused) {
    player5.play();
    boton5.className = "activo";
    player3.currentTime = 0;
    player3.pause();
    boton3.className = "boton";
    player4.currentTime = 0;
    player4.pause();
    boton4.className = "boton";
    player6.currentTime = 0;
    player6.pause();
    boton6.className = "boton";
    player7.currentTime = 0;
    player7.pause();
    boton7.className = "boton";
  } else {
    player5.currentTime = 0;
    player5.pause();
    boton5.className = "boton";
  };
});

boton6.addEventListener("click", function() {
  if (player6.paused) {
    player6.play();
    boton6.className = "activo";
    player3.currentTime = 0;
    player3.pause();
    boton3.className = "boton";
    player4.currentTime = 0;
    player4.pause();
    boton4.className = "boton";
    player5.currentTime = 0;
    player5.pause();
    boton5.className = "boton";
    player7.currentTime = 0;
    player7.pause();
    boton7.className = "boton";
  } else {
    player6.currentTime = 0;
    player6.pause();
    boton6.className = "boton";
  };
});

boton7.addEventListener("click", function() {
  if (player7.paused) {
    player7.play();
    boton7.className = "activo";
    player3.currentTime = 0;
    player3.pause();
    boton3.className = "boton";
    player4.currentTime = 0;
    player4.pause();
    boton4.className = "boton";
    player5.currentTime = 0;
    player5.pause();
    boton5.className = "boton";
    player6.currentTime = 0;
    player6.pause();
    boton6.className = "boton";
  } else {
    player7.currentTime = 0;
    player7.pause();
    boton7.className = "boton";
  };
});
