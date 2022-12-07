
// if ENCADENADOS

/* 

if(condicion){
    if(condicion){
        ...
    }else{
        ...
    }
}else{
    if(condicion){
        ...
    }else{
        ...
    }
}

 */


const ciudadDesitno = "Lima";
const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo");
let edadPasajero = 16;
let estaAcompañado = false;
let pesoMaleta = 23;
let medidasMaleta = 136;

console.log( `\n--- VERFICACIÓN DE PASAJE Y EQUIPAJE CON DESTINO ${ciudadDesitno} ----`)
if(ciudadesDisponibles.includes(ciudadDesitno)){
    if(edadPasajero >= 18 || estaAcompañado){
        if(pesoMaleta <=23 && medidasMaleta <= 135){
            console.log("EQUIPAJE CUMPLE CON CONDICIONES PARA VIAJAR \nPASAJE DISPONIBLE PARA LA VENTA")
        }else{
            console.log("EQUIPAJE NO CUMPLE CON CONDICIONES PARA VIAJAR \nPASAJE NO DISPONIBLE PARA LA VENTA")
        }
    }else{
        if((edadPasajero >= 16 && ciudadDesitno == "Lima") && (pesoMaleta <=23 && medidasMaleta <= 135)){
            console.log("PASAJE VALIDO PARA LA VENTA DISPONIBLE SOLO PARA LIMA - PERU \nEQUIPAJE CUMPLE CON CONDICIONES PARA VIAJAR ")
        }else{
            console.log("PASAJERO NO CUMPLE CON LAS CONDICIONES PARA VIAJAR")
        }
    }
}else{
    if(ciudadDesitno == "Madrid"){
        console.log("CIUDAD DISPONIBLE PRONTO PARA LA VENTA")
    }else{
        console.log("\nCIUDAD NO DISPONIBLE PARA LA VENTA")
    }
}

