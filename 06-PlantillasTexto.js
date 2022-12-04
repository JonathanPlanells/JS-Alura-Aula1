
// PLANTILLAS DE TEXTO
// TEMPLATE SCREEN

const nombrePasajero = 'Leonardo';
const apellidoPasajero = 'DiSolana';

// interpolación de texto
let nombreCompleto = `El nombre completo es: ${nombrePasajero} ${apellidoPasajero}`;
console.log(nombreCompleto);

// -----------------------
// INMUTABILIDAD


let segundoPasajero = "Diego Castillo";
console.log(`El nombre del segundo Pasajero es: ${segundoPasajero}`);

// Cambio de tipo de dato de string a numero, el espacio de memoria cambia el valor y tipo de la variable
segundoPasajero = 13890590;
console.log(`El nombre del segundo Pasajero es: ${segundoPasajero}`);

// Para evitar esa mutabilidad de da datos o variables lo mejor es usar const, para que el espacio de memoria sea el mismo
// el valor de cont no se podra cambiar a futuro.

