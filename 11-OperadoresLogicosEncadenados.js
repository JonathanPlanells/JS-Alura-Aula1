
const ciudadDesitno = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");

let edadPasajero = 18;
let estaAcompañado = true;
let tienePasaporte = true;
let pareja = true;

// Podemos agregar cualquier operador logico con tal de que se respete la prioridad si se necesita para el programa
// En este ejemplo al ser todos && no utilizamos parentesis e indicamos que todas las condiciones se tienen que cumplir
// si utilizaramos parentesis esta condición se ejecutaria primero.
// A && B && C && D  -> A y B y C y D
console.log(`Verificando pasajes para ${ciudadDesitno}`);
if(ciudadesDisponibles.indexOf(ciudadDesitno) > -1 && edadPasajero >= 18 && tienePasaporte && !pareja){
    console.log("Pasaje disponible para la venta");
} else{ 
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas")
}