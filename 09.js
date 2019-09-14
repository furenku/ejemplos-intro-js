function inventarNumero( minimo, maximo ) {
    
    let rango = maximo - minimo;
    let numeroAleatorio = minimo + Math.round( Math.random() * rango );
    
    return numeroAleatorio

}



function sumarNumeros( a, b ) {
    return a+b
}

let num1 = inventarNumero(10,20);
let num2 = inventarNumero(10,20);

let resultado = sumarNumeros( num1, num2 );

console.log(
    "el resultado de sumar",
    num1, " más ", num2, " es igual a ", resultado
);
