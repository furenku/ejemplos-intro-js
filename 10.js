let costoPorBola = 15;

let persona1 = {
    nombre: "Paulina",
    dinero: 40,
    preferencia: 5
}

let persona2 = {
    nombre: "Jimena",
    dinero: 60,
    preferencia: 2
}

let sabores = [
    "fresa",
    "vainilla",
    "chocolate",
    "frutos rojos",
    "tuna"
]


function calcularCosto( helado ) {
    let total = helado.length * costoPorBola;
    return total
}

function comprarHelados( persona ) {

    let unHelado = escogerHelado( persona.preferencia );
    
    // let costo = calcularCosto( unHelado )

    // console.log("que?", unHelado, "cuánto?", costo )

    // console.log(persona.nombre, ", tienes", persona.dinero, "pesos");

    // if( persona.dinero >= costo ) {
    //     console.log("Puedes comprar tu helado");
    // } else {
    //     console.log("No puedes comprar tu helado");
    // }

}

function escogerHelado( cuantasBolas ) {
    
    let nuevoHelado = []
    // hacer copia de lista original de sabores
    
    let opciones = [...sabores]


    for( let i = 0; i<cuantasBolas; i++ ) {
        
        let cual = Math.floor(Math.random()*opciones.length)
        
        let sabor = opciones[cual]
        
        // eliminar ultima opcion
        opciones.splice(cual,1);


        nuevoHelado.push( sabor );

        console.log("me quedan", opciones )
    }
    return nuevoHelado;
}



function salirAPasear( p1, p2 ) {

    comprarHelados(p1);
    comprarHelados(p2);

}




salirAPasear(persona1,persona2)

