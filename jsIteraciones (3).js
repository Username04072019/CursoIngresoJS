function mostrar()
{
/*  var cont = 0;
  var clave;  /* clave = "utn750" * /
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
Ahora, con do while + "bandera" (decir si fue un error, valor booleano) + corregido: * /

  var error = false;
  var clave;
  var cont = 0;

  do  {
    clave = prompt("Ingrese la clave.");
    cont++;
    if (cont == 3){
      error = true;
      break;
    } else if (clave) {
      cont;
    }
  } while (clave != "utn750");

  if(error){
    alert("Error");
  } else {
    alert("Éxito");
  }

  Ahora con for */

  var error = false;
  var clave
  var cont = 0;

  for ( ; clave != "utn750"; )
  {
    clave = prompt();
  }

  if(error){
    alert("Error");
  } else {
    alert("Éxito");
  }

}//FIN DE LA FUNCIÓN
