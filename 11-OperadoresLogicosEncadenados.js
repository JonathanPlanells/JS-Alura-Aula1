
const ciudadDesitno = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompañado = true;
let tienePasaporte = true;
let pareja = true;



// A && B && C && D  -> A y B y C y D
console.log(`Verificando pasajes para ${ciudadDesitno}`);
if(ciudadesDisponibles.indexOf(ciudadDesitno) > -1 && edadPasajero >= 18 && tienePasaporte && !pareja){
    console.log("Pasaje disponible para la venta");
} else{ 
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas")
}