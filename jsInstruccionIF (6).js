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



}//FIN DE LA FUNCIÓN