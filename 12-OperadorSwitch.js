

const ciudadDesitno = "Bogotá";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Quito");

let titulo = "\n --- Verificando pasajes para la ciudad de " + ciudadDesitno + " --- \n";
let valorPasaje = 0;

// Condiciones con if ----->

console.log(titulo)

if (ciudadesDisponibles.includes(ciudadDesitno)) {
    if (ciudadDesitno == "Bogotá") {
        valorPasaje = 500;
    } else if (ciudadDesitno == "Lima") {
        valorPasaje = 400;
    } else if (ciudadDesitno == "Santiago") {
        valorPasaje = 380;
    } else if (ciudadDesitno == "Montevideo") {
        valorPasaje = 200;
    }
    console.log(`El valor del pasaje a ${ciudadDesitno} es de: $${valorPasaje} USD.`);
} else {
    console.log(`La ciudad de ${ciudadDesitno} no esta disponible para viajar.`);
}


// Condiciones con Switch ---->

console.log(titulo)

switch (ciudadDesitno) {
    case "Bogotá":
        valorPasaje = 500;
        break;
    case "Lima":
        valorPasaje = 400;
        break;
    case "Santiago":
        valorPasaje = 380;
        break;
    case "Montevideo":
        valorPasaje = 200;
        break;
    default:
        console.log(`La ciudad de ${ciudadDesitno} no esta disponible para viajar.`);
        break;
}
if (valorPasaje > 0) {
    console.log(`El valor del pasaje a ${ciudadDesitno} es de: $${valorPasaje} USD.`);
}

