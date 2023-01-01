
const ciudadDesitno = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompañado = true;


// A && B || C  -> A y B o C
console.log(`Verificando pasajes para ${ciudadDesitno}`);
if((ciudadesDisponibles.indexOf(ciudadDesitno)> - 1) && (edadPasajero >= 18 || estaAcompañado)){
    console.log("Pasaje disponible para venta");
} else{
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas")
}