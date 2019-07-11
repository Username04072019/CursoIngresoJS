
function mostrar()
{
  var largo;
  largo = prompt("Ingresar el largo del rectángulo");
  largo = parseInt(largo);

  var ancho;
  ancho = prompt("Ingresar el ancho del rectángulo");
  ancho = parseInt(ancho);
  var resultado = ((largo + ancho)*2);
  alert(resultado);

}
