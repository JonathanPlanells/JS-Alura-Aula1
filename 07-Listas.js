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

