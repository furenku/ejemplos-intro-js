function inventarNumero( minimo, maximo ) {
    
    let rango = maximo - minimo;
    let numeroAleatorio = minimo + Math.round( Math.random() * rango );
    
    return numeroAleatorio

}


function probarSiRespetaMinimoYMaximo() {
    let minimo = 10;
    let maximo = 30;
    let resultado = inventarNumero( minimo, maximo )
    
    if( resultado >= minimo && resultado <= maximo ) {
        return true;
    } else {
        return false;
    }
}


console.log("probarSiRespetaMinimoYMaximo")

let funcionoBien = false;

for( let i = 0; i<10000; i++) {
    funcionoBien = probarSiRespetaMinimoYMaximo()
    if( ! funcionoBien ) {
        break;
    }

}

if( funcionoBien ) {
    console.log("ok!")
} else {
    console.error("FAIL")
}

