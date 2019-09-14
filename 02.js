/*
let edad = 17;
let tienesBoleto = false;

if( edad >= 18 && tienesBoleto ) {

    "puedes entrar"

} else {
    "no puedes entrar"
}

*/

let diaDeSemana = "lunes"
let pantalon;

switch( diaDeSemana ) {

    case "lunes":
    case "martes":
        pantalon="azul"
        break;
    case "miercoles":
    case "jueves":
        pantalon="gris"
        break;
    case "viernes":
        pantalon="negro"
        break;

    default:
        pantalon = "sin pantalon"

}

console.log("Pantalon:", pantalon)

