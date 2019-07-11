function mostrar()
{
  var precio;
  precio = prompt("Ingrese el precio:");
  precio = parseInt(precio);

  var descuento;
  descuento = prompt("Ingrese el porcentaje de descuento:");
  descuento = parseInt(descuento);

  var final = (precio-(descuento*precio/100));

  document.getElementById("elPrecioFinal").value = final;

}
