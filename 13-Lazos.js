// USO DE WHILE 

const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo", "Quito");
const precioCiudades = new Array(500, 400, 380 , 200, 100);
const presupuestoDisponible = 150;

let i = 0
console.log("Puedes comprar un pasaje para la ciudad de: ")

// Cuando el while encuentra una coincidencia este se detenie
// Aqui esta evaluando si el costo del boleto es mas alto que el presupuesto
// Cuando el costo del boleto no sea mas alto que el presupuesto el while se detiene
// la variable i va guardando el número el cual es luego utilizado para identificar la ciudad

while(precioCiudades[i] > presupuestoDisponible && i < ciudadesDisponibles.length ){
    i++; // Si no ponemos el aumento del contador en este caso la variable i, SE CREA UN BUCLE INFINITO
}

if(i == ciudadesDisponibles.length){
    console.log(" - No hay ciudades disponibles para tu presupuesto");
}else{
    console.log(" - " + ciudadesDisponibles[i]);
    console.log(`El valor del pasaje es $${precioCiudades[i]} USD`)
}

// Como resultado solo muestra la siguiente ciudad validad cuando el valor del boleto es menor al presupuesto
// Si queremos hacer una lista de ciudades disponibles toca utilizar un for
