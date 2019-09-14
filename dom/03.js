const versos = [
    "A esa la he querido yo a rabiar ",
    "la he querido yo a morir ",
    "tu no puedes figurarte como la he podido amar ",
    "A esa que ahora esta como ya ves ",
    "destruida de rodar ",
    "yo le he escrito mil poemas",
    "a sus ojos y a su piel",
];


var destino = document.querySelector('#mi-caja');




for( verso of versos ) {
// for( let i = 0; i<5; i++) {
    
    var parrafo = document.createElement('p');

    parrafo.innerHTML = verso;
    
    destino.append(parrafo);

}


var imagen = document.createElement('img');

imagen.setAttribute('src','http://unsplash.it/400/300');

imagen.style=" border: 10px solid #fa0";

console.log(imagen);

destino.insertBefore(imagen,parrafo);


