/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var numuno=document.getElementById("numeroUno").value;
  var numdos=document.getElementById("numeroDos").value;
  var resultado;

  numuno = parseInt(numuno);
  numdos= parseInt(numdos);
  resultado=numdos+numuno;
  alert("La suma es "+resultado);
}
