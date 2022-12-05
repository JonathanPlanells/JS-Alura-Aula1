// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

// Definición de una lista con tipo de dato alfannumérico
const ciudadesDsiponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDsiponibles);

// Definción de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Perú","Chile","Brasil", "Argentina"];
console.log(paisesDisponibles);


{
    // Agregar elemento al final de la lista
    paisesDisponibles.push("Uruguay");
    ciudadesDsiponibles.push("Montevideo");

    console.log(ciudadesDsiponibles);
    console.log(paisesDisponibles);

    // Agregar elemento al incio de la lista
    paisesDisponibles.unshift("Ecuador");
    ciudadesDsiponibles.unshift("Quito");

    console.log(ciudadesDsiponibles);
    console.log(paisesDisponibles);

}

// Mostrar un elemento de la lista según su posición
console.log(paisesDisponibles[0]);
console.log(ciudadesDsiponibles[2]);


//splite
// Splite elimina los elementos que seleccionemos de acuerdo al indice 
// y agregara si lo necesitamos en esos mismos espacios o indices los elementos que solicitemos

// Aqui eliminara los elementos en la posición 1 y 2 y agregara en esas mismas posiciones a Venezuela y Paraguay
paisesDisponibles.splice(1,2,"Venezuela", "Paraguay");
console.log(paisesDisponibles);

// Eliminando los elemenots en la posición 0 y 1, agregando a Caracas en la posición 0 y las demas posiciones se corren.
ciudadesDsiponibles.splice(1,2,"Caracas");
console.log(ciudadesDsiponibles);

