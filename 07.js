 function saludar( ) {

    let saludo = "hola"
    saludo += ", qué tal"
    
    decirAlgo( saludo )

}


function despedir() {
    decirAlgo("hasta luego")
}

function reportarse() {
    decirAlgo("hoy no hice nada")
}

function decirAlgo( algo ) {
    console.log( algo )
}


saludar()

reportarse()

despedir()