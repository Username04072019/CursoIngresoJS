function mostrar()
{

	var contador=0;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 1;
	var respuesta=true;
	var confirmar;
	var	num;

	while (respuesta == true) {
		contador++;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		if (num >= 0) {
			acumuladorPositivo = acumuladorPositivo + num;	
			
		} else if (num <= -1) {
			acumuladorNegativo = acumuladorNegativo*num;
		}		
		confirmar =  confirm('¿Desea continuar?');
		if (confirmar == true){
			respuesta = true;
		} else {
			respuesta = false;
		}
	}

	document.getElementById('suma').value=acumuladorPositivo;
	document.getElementById('producto').value=acumuladorNegativo;

}//FIN DE LA FUNCIÓN