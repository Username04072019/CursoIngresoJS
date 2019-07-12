function mostrar()
{
//tomo la edad
  var edad
  edad = document.getElementById("edad").value;
  edad = parseInt(edad);
  var estado
  estado = document.getElementById("estadoCivil").value;

  if (edad < 18 && estado == "Casado" || edad < 18 && estado == "Divorciado") {
    alert("Es muy pequeño para NO ser soltero.");
  }

}//FIN DE LA FUNCIÓN
