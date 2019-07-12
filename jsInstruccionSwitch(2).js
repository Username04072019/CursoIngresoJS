function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) {
  case 'Enero' :
    alert("Falta para el invierno.");
    break;
  case 'Febrero' :
    alert("Falta para el invierno.");
    break;
  case 'Marzo':
    alert("Falta para el invierno.");
    break;
  case 'Abril':
    alert("Falta para el invierno.");
    break;
  case 'Mayo':
    alert("Falta para el invierno.");
    break;
  case 'Junio' :
    alert("Falta para el invierno.");
    break;
  case 'Julio' :
    alert("Abrigate que hace frío.");
    break;
  case 'Agosto':
    alert("Abrigate que hace frío.");
    break;
  case 'Septiembre':
    alert("Ya pasamos el frio, ¡ahora calor!");
    break;
  case 'Octubre':
    alert("Ya pasamos el frio, ¡ahora calor!");
    break;
  case 'Noviembre':
    alert("Ya pasamos el frio, ¡ahora calor!");
    break;
  case 'Diciembre':
    alert("Ya pasamos el frio, ¡ahora calor!");
    break;
  }

  /* otra forma de realizarlo es dejando el case vacio sin break:
    switch(mesDelAño) {
        case "julio":
          //no coloco nada en case "julio" (dejo el case vacio) ya que no hay break
        case "agosto":
          alert("invierno");
          break;
        case "enero":
        case "febrero":
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
          alert("falta");
          break;
    }

  */

}//FIN DE LA FUNCIÓN
