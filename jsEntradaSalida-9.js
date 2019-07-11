/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var num1;
var aumento;

function mostrarAumento()
{
  num1 = document.getElementById("sueldo").value;
  num1 = parseInt(num1);
  aumento=(10*num1/100);
  var resultado = num1 + aumento;
  document.getElementById("resultado").value = resultado;
}
