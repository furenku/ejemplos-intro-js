
let personas = [
    {
        nombre: "magali",
        apellido: "mejía"
    },
    {
        nombre: "damaris",
        apellido: "..."
    }, 
    {
        nombre: "jazmin",
        apellido: "..."
    }, 
    {
        nombre: "ricardo",
        apellido: "..."
    }, 
    {
        nombre: "iván",
        apellido: "muñoz"
    }, 
    {
        nombre: "leda",
        apellido: "mejía"
    },
    {
        nombre: "frenk",
        apellido: "..."
    },
    {
        nombre: "luis",
        apellido: "..."
    },
]

// for( let i = 0; i < personas.length; i++) {
//     console.log(i+1, personas[i]);
// }

// for( numeroDePersona in personas ) {
//     console.log(numeroDePersona, personas[numeroDePersona]);
// }



// for( persona of personas ) {
//     console.log( persona );
// }



let cualPersona;

for( persona of personas ) {
    
    console.log("checando apellidos:", persona.nombre);

    if( persona.apellido == "mejía" ) {
        cualPersona = persona;
        break;
    }
    
}


console.log("la persona es ", cualPersona.nombre )