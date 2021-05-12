//En esta carpeta estaran las funciones que son 3:
//1ª para generar un numero aleatorio y convertir un numero decimal a entero
//2ª el teorema de pitagoras que consiste en la suma de los catetos para obtener 
//la hipotenusa osea la distancia (entre el click y el tesoro)
//3ª Es para darle una pista al usuario de que tan cerca esta del tesoro

let numeroAleatorio = size => {
    return Math.floor (Math.random() * size);
}
let tomaDeDistancia = (evento, objetivo) => {
    let diff_ejeX = evento.offsetX - objetivo.x;
    let diff_ejeY = evento.offsetY - objetivo.y;
    return Math.sqrt((diff_ejeX * diff_ejeX) + (diff_ejeY + diff_ejeY)) //math es una biblioteca de matematica y sqrt calcula la raiz cuadrada
}
//lo que aremos aqui abajo es darle una pista al usuario de
//que tan lejos o cerca esta del tesoro

let pista_de_distancia = distance => {
    if (distance < 30) {
        return "wau, estas muy cerca!"
    }else if (distance < 50){
        return "caliente"
    }else if (distance < 70){
        return "tibio"
    }else if (destance < 120){
        return "frio"
    }else if (distance < 200){
        return "muy frio"
    }else if (distance < 270){
    return "Estamos en Antartida"
    }else {
        return "congelado"
    }
}