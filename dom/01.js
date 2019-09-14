var caja = document.getElementById("mi-caja")

caja.innerHTML = "nuevo contenido"


var otrascajas = document.getElementsByClassName('clase-caja')

var otracaja = otrascajas[0]

otracaja.innerHTML = "nuevo contenido para la otra caja"


var todasLasCajas = document.getElementsByTagName('div')

for( caja of todasLasCajas ) {
    caja.style="outline: 3px solid red"
}