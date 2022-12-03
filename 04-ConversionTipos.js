// TIPO DE DATOS
// ALFANUMERICO - String

// El tipo const no se puede modificar despues de que ya se le ha asignado un valor
// si lo modificamos y damos un console.log, generaremos un error, 
const nombrePasajero = "Pedro Silva";
console.log(nombrePasajero)

// Para crear variables editables utilizaremos let.
let nombresPasajeros = "Ramon Silva";
console.log(nombresPasajeros);

nombresPasajeros = "Martina Silva";
console.log(nombresPasajeros);

// variables con valores alfanumericos
let direccion = "Carrera 56 - Diagonal 90 A"
console.log(direccion)

// NUMERICO
const valorBoleto = 1980;
console.log(valorBoleto);
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 120.58;

// LOGICOS (true,false)
let boletoActivo = true;


// Operaciones aritméticas
// Suma

let totalBoleto = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;
let totalBoleto2 = valorBoleto + valorBoleto*porcentajeTasaEmbarque + gestionAgencia + 100;
console.log(totalBoleto);
console.log(totalBoleto2);

// ORDEN DE PRECEDENCIA
// ()
// * y /
// + y -

let totalSinProcedencia = valorBoleto + impuestoAeropuerto + valorBoleto + impuestoAeropuerto * porcentajeTasaEmbarque + gestionAgencia;
let totalConProcedencia = (valorBoleto + impuestoAeropuerto) + ((valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque) + gestionAgencia;
console.log(totalSinProcedencia);
console.log(totalConProcedencia)

// CONCATENACIÓN DE TEXTO y NUMEROS

let nombrePiloto = "Leonardo";
let apellidoPiloto = "Lacruz";

// Cuando damos variables numericas entre comillas estas se toman como string y no se suman, estas se concatenan.
// esto solo funciona con la suma, con las demas operaciones aritmeticas, JS identifica los números y realiza la operación,
// pero lo mejor es utilizar parseInt() o parseFloat() para indicarle a JS el tipo de dato.
let codigoPiloto = "56890";
let codigoAvion = "43";

let codigoVueloPiloto = codigoPiloto + codigoAvion // -> Concatena los numeros o valores alfanúmericos
let codigoVueloPiloto2 = codigoPiloto - codigoAvion //-> Realiza operación

let nombreCompletoPiloto = nombrePiloto + " " + apellidoPiloto;

console.log(nombreCompletoPiloto);
console.log(codigoVueloPiloto);
console.log(codigoVueloPiloto2);

let noEsUnNumero = parseInt("asaASASD")
console.log(noEsUnNumero) // -> NaN