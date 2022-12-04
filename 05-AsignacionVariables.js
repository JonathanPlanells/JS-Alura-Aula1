
// const
// Variable que no va cambiar su valor durante la ejecución del programa
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo

const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "Juan";
const apellidoPasajero = "DelaRoja";

// let
// Espacio de memoria que puede cambiar durante la ejeución del programa

let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero;

console.log(nombreCompletoPasajero);

// var
// Espacio de memoria que puede cambiar durante la ejeución del programa
// El alcance de la variable es total dentro de todo el programa a diferencia de let que solo se utiliza dentro de funciones o bloques de programas

var nombreCompletoDelPasajero = nombrePasajero + " " + apellidoPasajero;

// BLOQUE

{
    var nombreCompletoDelPasajero2 = nombrePasajero + " " + apellidoPasajero;
    console.log(nombreCompletoDelPasajero2); // Se ejecuta dentro del bloque y funciona 

    let sobrenombrePasajero = "pasajero 1";
    console.log(sobrenombrePasajero);
    // la variable let declarada dentro del bloque solo se puede ejecutar dentro de este mismo bloque
    // si realizamos un console.log fuera del bloque generara un error.
    // al contrario de lo que pasa con var, a pesar de ser declarado afuera o dentro del bloque igual se podra ejecutar.
}
console.log(nombreCompletoDelPasajero2); // se llama fuera del bloque e igual se ejecuta con normalidad el programa