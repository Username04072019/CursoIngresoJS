/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
var num1;
var aumento;

function mostrarAumento()
{
	num1 = document.getElementById("importe").value;
  num1 = parseInt(num1);
  descuento=(25*num1/100);
  var resultado = num1 - descuento;
  document.getElementById("resultado").value = resultado;
}
