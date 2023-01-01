// WHILE CON LISTA DE MAPAS ----
const presupuestoDisponible = 190;

// LISTA DE MAPAS
const datos = [
    {
        "ciudad": "Bogotá",
        "precio": 500
    },
    {
        "ciudad": "Lima",
        "precio": 400
    },
    {
        "ciudad": "Santiago",
        "precio": 380
    },
    {
        "ciudad": "Montevideo",
        "precio": 200
    },
    {
        "ciudad": "Quito",
        "precio": 100
    }
]
console.log("Puedes comprar un pasaje para la ciudad de: ")

let i = 0;
// Como cambiamos a un mapa de listas, ahora el orden de la condición tiene que cambiar
// primero hay que evaluar la cantidad de elementos para que no exista un error
while (i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}

if (i == datos.length) {
    console.log(" - No hay ciudades disponibles para tu presupuesto");
} else {
    console.log(" - " + datos[i].ciudad);
    console.log(`El valor del pasaje es $${datos[i].precio} USD`)
}