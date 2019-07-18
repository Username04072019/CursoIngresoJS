function mostrar()
{
  var cont = 0;
  var clave;  /* clave = "utn750" */
  clave = prompt("Ingrese el número clave.");

  while (clave != "utn750") {
    cont++;
    clave = prompt("Clave incorrecta. Ingrese el número clave.");
    if (cont == 3){
      break;
    } else if (clave) {
      cont;
    }
  }

}//FIN DE LA FUNCIÓN
