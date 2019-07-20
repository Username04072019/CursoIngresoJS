function mostrar()
{
	var num 
	
	do {
		num = prompt("Ingrese un número entre 0 y 9.");
	} while (!(num >= 0 && num <= 9 ))	

	document.getElementById('Numero').value=num;

}//FIN DE LA FUNCIÓN