function mostrar()
{
//tomo la edad
var edad
edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad <= 12) {
    alert("La persona es un niño.");
    } else if (edad >= 13 && edad <= 17) {
        alert("La persona es un adolescente ")
    } else if (edad >= 18) {
        alert("La persona es mayor de edad.")
    }

/* 12/07/19: no hace falta aclarar dos veces. ej:
  if (edad > 17) {
    alert("adulto");
  } else {
    if (edad > 13) {
      alert("adolescente");
    } else {
      alert("niño");
    }
  }
*/

}//FIN DE LA FUNCIÓN
