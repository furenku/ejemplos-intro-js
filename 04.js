let persona = {
    nombre: "Juan",
    hijos: [
        {
            nombre: "Pedro",
            hijos: [
                {
                    nombre: "Enrique",
                    hijos: [
                        {
                            nombre: "Sandra",
                            hijos: []
                        }
                    ]
                }
            ]
        }
    ]
}


function mostrarHijos( padre ) {
    
    let siguientePadre = padre;
    let tieneHijos = siguientePadre.hijos.length > 0
    let siguientesHijos;

    while( tieneHijos ) {

        siguientesHijos = siguientePadre.hijos;

        for( hijo of siguientesHijos ) {

            console.log("hijo de ", padre.nombre, "es", hijo.nombre)
            
            siguientesHijos = hijo.hijos;
        
            tieneHijos = siguientesHijos.length > 0;

            if( tieneHijos ) {
                siguientePadre  = hijo
            }

        }

        
    }
    
}


mostrarHijos(persona);