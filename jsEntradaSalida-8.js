/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
var dividendo;
var divisor;

function SacarResto()
{
  dividendo = document.getElementById("numeroDividendo").value;
  divisor = document.getElementById("numeroDivisor").value;

  dividendo=parseInt(dividendo);
  divisor=parseInt(divisor);

  var resultado = dividendo % divisor;

  alert("El resto es "+resultado);

}