miSuperObjeto = {
    clave: "un valor original"
}


otroObjeto = miSuperObjeto
// otroObjeto = Object.assign({}, miSuperObjeto )
otroObjeto = {...miSuperObjeto}

otroObjeto.clave = "otro valor cambiado"


console.log( miSuperObjeto )
console.log( otroObjeto )