var caja = document.querySelector("#mi-caja")

caja.innerHTML = "nuevo contenido"



var otracaja = document.querySelector('.clase-caja')

otracaja.innerHTML = "nuevo contenido para la otra caja"


var todasLasCajas = document.querySelectorAll('div')

for( caja of todasLasCajas ) {
    caja.style="outline: 3px solid red"
}