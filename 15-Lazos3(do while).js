const presupuestoDisponible = 100;

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
// USO DE DO WHILE
// DO WHILE Significa (hacer mientras)
// Realize (do) la accion, condición, etc, mientras (while) se cumpla

let i = 0;

do {
    if (i < datos.length && datos[i].precio > presupuestoDisponible) {
        i++
    }
} while (i < datos.length && presupuestoDisponible < datos[i].precio);

if (i == datos.length) {
    console.log(" - No hay ciudades disponibles para tu presupuesto");
} else {
    console.log("Puedes comprar un pasaje para la ciudad de: ")
    console.log(" - " + datos[i].ciudad)
    console.log(`El precios del pasaje es : $${datos[i].precio} USD`)
}
