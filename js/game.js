window.load = inicio;
const WIDTH = 540 //ancho de la imagen
const HEIGHT = 540//altuta de la imagen
 
let objetivo = {
    //aqui debajo llamaremos a la funcion de "numeroAleatorio"
    //de la carpeta funciones.js
    //esta variable de arriba llamada "objetivo" va a tener dos
    //parametro x y y
    //Esta funcion fue creada para que nos de un numero aleatorio dentro de nuestra
    //imagen del tesoro
    x: numeroAleatorio(WIDTH),
    y: numeroAleatorio(HEIGHT)
};

//ya para este punto ya nos ha generado nuestro punto aleatorio
//y eso podemos verlos con un console.log(objetivo) actualizando 
//la pagina repetidas veces

//aqui debajo veremos como obtener "en donde ha echo click en usuario",
//y para hacer eso vamos a tomar como referencia las medidas de las imagenes
//que tenemos en html con el id correspondiente que es "map" dentro de la
//etiqueta "img"
let $map = document.getElementById("map")//el signo $ es para tener referencia
let $distance = document.getElementById("distance")// que es un archivo html
let clicks = 0;

//ahora para saber cuando el usuario da un click vamos a hacer lo sigiente:
//agregamos un escucha osea un evento,(que en resumen cuando el usuario 
// haga click se retornara algo, que sera lanzar un mensaje de proximidad)

$map.addEventListener("click", function(evento) {
    clicks++;
    let distance = tomaDeDistancia(evento, objetivo);
    let pistaDeDistacia = pista_de_distancia(distance);
    $distance.innerHTML = `<h1>${pistaDeDistacia}</h1>`
        
    

    if (distance < 20){
        alert(`has encontrado el tesoro en ${clicks} clicks!`)
        location.reload();
    }
    
})


//aqui arriva estamos utilizando a la funcion llamada
// tomaDeDistancia que hace referencia del teorema de pitagoras, esta 
//recibe dos parametros (osea dos datos) el (evento) que hace referencia a donde 
//hacemos click y (objetivo) que hace referencia al tesoro.

//si le damos a cosole.log(distance) nos va a retornar la distancia que estamos
//del tesoro

//pero con la variable pistaDeDistacia nos devolvera un nombre en vez de numeros.
