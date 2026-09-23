// Adivino de número del 1 al 100, se pregunta al usuario por el número, si escribe algo que no es un número se indica que lo acertó y se finaliza el juego
// Si lo acierta, finaliza el juego. Si no, le pregunta si es mayor o menor y vuelve a preguntar. Si se cancela cualquier cuadro, se finaliza indicando cancelado.
// Si ha finalizado correctamente, se indica el número de intentos que han pasado.

let numIntentos = 0

let Adivino = () => {
    //Comienzo del juego, aquí se comprueba si el número esta fuera de rango
    let numIntroducido = prompt("Indica un número para empezar del 1 al 100")
    //Comprobamos si es un número, en caso contrario se indica que lo ha acertado
    if (isNaN(numIntroducido)){
        alert("Has acertado")
    }
    //Comprobamos que el número esté dentro del rango.
    if (numIntroducido < 1 || numIntroducido > 100) {
        //Si no está dentro del rango, se indica por un alert y entra en un bucle while hasta que se introduzca un número entre el 1 y el 100.
        alert("Numero fuera de rango.")
        while (numIntroducido < 1 || numIntroducido > 100) {
            numIntroducido = prompt("Indica un número para empezar del 1 al 100")
                if (numIntroducido < 1 || numIntroducido > 100) {
                alert("Numero fuera de rango.")
                }
                //Comprobamos si es un número, en caso contrario se indica que lo ha acertado
                if (isNaN(numIntroducido)) {
                    alert("Has acertado")
                    break
                }
        }
    }
    //Aqui empieza el juego ya con el número chequeado.

    let numAle = Math.random()*100
    numAle = parseInt(numAle)
    console.log(numAle)
    
    let pregunta = confirm(`¿Tu número es el ${numAle}?`)
    if (!pregunta) {
        let menor = 100
        let mayor = 0
        pregunta = prompt("Es mayor o menor?").toLowerCase
        if (pregunta === mayor) {
            
        }
    } else {
        alert(`Lo adiviné! Es el ${numAle} y tu me dijiste el ${numIntroducido}`)
    }
    
    

}