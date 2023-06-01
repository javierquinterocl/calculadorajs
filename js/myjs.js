
var boton = document.getElementById("boton")
var fondo = document.getElementById("fondo1")
var input = document.getElementById("input11");
boton.onclick = function myfuncion(){
   
 
  fondo.classList.toggle("open");
  boton.classList.toggle("open");
  input.classList.toggle("open");
    

}