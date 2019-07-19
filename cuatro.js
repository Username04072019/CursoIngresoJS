function mostrar()
{
    var num1 = prompt("Ingrese un número:");
    var num2 = prompt("Ingrese otro número:");
    
    num1 = parseInt(num1);
    num2 =  parseInt(num2);
    
    if (num1 == num2) {
            alert("" + num1 + num2); 
        } else if (num1 > num2) {
            alert(num1 - num2);
        } else if (num1 < num2) {
            var suma = num1 + num2;
            alert(suma);
            if (suma >= 10) {
                alert("La suma es "+ suma+" y superó el 10.");
            }
        } 
}

