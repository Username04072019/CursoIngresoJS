function mostrar()
{
	var cont=0;
	var acumulador=0;
	var num;

	while (cont < 5) {
		cont++;
		num = prompt("Ingrese un numero");
		num = parseInt(num);
		acumulador = acumulador + num;		
	} 

	

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN+