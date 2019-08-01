function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	var confirmar;
	var	num;

	while (respuesta == true) {
		contador++;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		acumulador = acumulador + num;
		confirmar =  confirm('¿Desea continuar?');
		if (confirmar == true){
			respuesta = true;
		} else {
			respuesta = false;
		}
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN