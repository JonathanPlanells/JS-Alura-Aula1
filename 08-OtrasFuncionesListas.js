
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


// Conocer tamaño de la lista
// length
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const paisesDisponibles = ["Colombia","Perú","Chile","Brasil","Argentina","Urugay","Venezuela"];

// Podemos crear una variable para que esta almacene la cantidad de elementos
const cantidadCiudades = ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);

// De igual manera podemos utilizar la funcion length directamente para conocer la cantidad de elementos de una lista
console.log(`En la lista de ciudades tenemos ${paisesDisponibles.length} elementos`);

//Eliminar el primer elemento de la lista
//.shift()
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

// Eliminar el elemento final de la lista
// .pop()
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);


// Filtrando elementos de acuerdo a una condición 
const paisesFiltrados = paisesDisponibles.filter(elemento => elemento == "Colombia");
console.log(paisesFiltrados);

// Filtando elementos con la condicion del tamañao de los elementos
// .filter()
console.log(`Los paises que tienen mas de 5 letras son: ${paisesDisponibles.filter(tamnio => tamnio.length >= 5)}`);

//.incluides() podemos especificar un elemento que incluya algun elemento de la lista
console.log(`Los paises que tienen la letra i en su nombre son: ${paisesDisponibles.filter(letra => letra.includes("i"))}`);

// Convertir una lista en cadena de caracteres
// Con .join() podemos especificar si queremos o no que se incluya un caractere o caracteres entre cada elemento de la lista
console.log(paisesDisponibles.join(" - "));

// Ordenar la lista
// .sort()
// Utilizaremos sort para organizar de mayor a menor o alafabeticamente los elementos de la lista
console.log(paisesDisponibles.sort());
// tener en cuetna que sort modifica el arreglo si despues volvemos a llamar el arreglo este mantedra el orden que le dio .sort()
console.log(paisesDisponibles)

// Conciendo la posición de un elemento de la lista
console.log(`Peru esta en la posición : ${paisesDisponibles.indexOf("Perú")}`)

// Unificando dos listas
const listaPiasesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);

console.log(`\nLista de paises y ciudades \n${listaPiasesYCiudades}`);