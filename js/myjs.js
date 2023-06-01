
var fondoboy = document.querySelector("body");
var boton = document.getElementById("boton")
var fondo = document.getElementById("fondo1")
var input = document.getElementById("input11");
boton.onclick = function myfuncion(){
   
  fondoboy.classList.toggle("open");
  fondo.classList.toggle("open");
  boton.classList.toggle("open");
  input.classList.toggle("open");
    

}