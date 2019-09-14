let edad = 0;
let edadInsuficiente = true;


setTimeout(function(){
    console.log("wtf")
    edadInsuficiente = false;
}, 1000);


while( edadInsuficiente ) {
    
    console.log("no puede entrar porque tiene", edad, "años");

    edad++;
    
}

