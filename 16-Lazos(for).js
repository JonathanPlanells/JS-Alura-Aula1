const presupuestoDisponible = 99;

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

console.log("Ciudades disponibles:")
for (let i = 0; i < datos.length; i++) {
    if (i < datos.length && datos[i].precio <= presupuestoDisponible){
        console.log(" - " + datos[i].ciudad + " -> " + datos[i].precio + " USD") 
    }else if(i + 1 == datos.length){
        console.log(" - No hay ciudades disponibles con su presupuesto")
    }
}

