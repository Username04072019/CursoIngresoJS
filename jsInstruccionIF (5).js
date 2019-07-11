function mostrar()
{
//tomo la edad  
    var edad
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);

    if (edad <= 13 || edad >= 17) {
        alert("La persona no es un adolescente.");
    }

/* forma alternativa de resolverlo es mediante la negativa. Ej:
    if (!(edad >= 13 && edad <= 17)); */
}//FIN DE LA FUNCIÓN