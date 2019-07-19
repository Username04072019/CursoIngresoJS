function mostrar()
{
    var planeta = prompt("Ingrese el nombre de un planeta del Sistema Solar (con mayúsculas):");
    
    switch (planeta) {
        case 'tierra':
            alert("Acá vivimos");
            break;
        case 'mercurio':
        case 'venus':
            alert("Acá hace más calor.");
            break;
        case 'marte':
        case 'jupiter':
        case 'saturno':
        case 'urano':
        case 'neptuno':
        case 'plutón':
            alert("Acá hace más frío.");
            break;
    }
    
}
