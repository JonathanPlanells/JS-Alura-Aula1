
// Operadores de comparación

const ciudadDesitno = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");


// Condicionales (if)
// Evalua una condición

// condición con .indexOf()
// Con .index0f() especificamos que si se encuentra la ciudad nos dara su indice y si este es mayor o igual a 0
// la condición se cumple
if (ciudadesDisponibles.indexOf(ciudadDesitno) >= 0) {
    console.log("Pasaje disponible para la venta");
}

console.log(`--- Verificando pasajes para ${ciudadDesitno} ---`);
// Condición con .includes()
// Si utilizamos .includes() estamos definiendo que si el elemento lo incluye la lista nos de true si no false
// si es true la condición se cumple
if (ciudadesDisponibles.includes(ciudadDesitno) == true) {
    console.log("Pasaje disponible para la venta");

} else {
    console.log("Destino NO disponible para la venta");
}


// ---------------------------------------------


// Operador logico o de comparación triple igual ===
// Este operador ademas de veriricar que el elemento sea igual tambien verifica que el tipo de dato sea el mismo

const valorPasaje = "1000";

// En esta condición el doble igual solo compara que el elemento dentro del tipo de variable sea igual
// sin importar el tipo de dato
if (valorPasaje == 1000) {
    console.log("El pasaje es 1000")
}

// En esta condición estamos indicando que el valorPasaje sea igual tanto el numero como el tipod de dato
// Al tener la variable valorPasaje en string y la condición en int, nos da una condición falsa
if (valorPasaje === 1000) {
    console.log("El pasaje es 100")
} else {
    console.log("El tipo de dato es diferente")
}


// Operadores Logicos

// AND (Y)  - OR (O) - NOT (NO)

// AND && -> Se deben cumplor las 2 condiciones 
// OR || -> Se debe cumplir alguna de las dos condiciones
// NO ! -> No se cumple la condición

let edadPasajero = 19;
let estaAcompañado = true;

console.log(`\n--- Verificando pasajes de avion para ${ciudadDesitno} ---`);
if (edadPasajero >= 18 || estaAcompañado == true) {
    if ((ciudadesDisponibles.indexOf(ciudadDesitno) >= 0)) {
        console.log(`${ciudadDesitno} tiene pasaje disponible para la venta`);
    } else {
        console.log("Pasaje no disponible para la venta - Pasajero con condiciones para viajar");
    }
} else {
    console.log("Pasajero no cumple las condiciones para viajar")
}


// Aplciando logica negativa

edadPasajero = 16;
estaAcompañado = false;

if (!((ciudadesDisponibles.indexOf(ciudadDesitno) >= 0) && (edadPasajero >= 18 || estaAcompañado == true))) {
    console.log("Pasaje no disponible para la venta - Pasajero no cumple las condiciones para viajar");
} else {
    console.log(`${ciudadDesitno} tiene pasaje disponible para la venta - Pasajero con condiciones para viajar`);
}
