
let numerosRandomUtilizados = []
let numeroRandom
let intentoNumero = 1
let numeroMaximo = 10

function intentoDeUsuario (){

    let numeroUsuario = parseInt(document.getElementById("ValorUsuario").value)
    if (numeroRandom === numeroUsuario){
        escribirEnHTML("p", `Felicidades acertaste en ${intentoNumero} ${ (intentoNumero == 1 ) ? "intento" : "intentos"}`)
        limpiarInput()
        
        intercambiarDisableButtons()

    }else{
        limpiarInput()
        if (numeroRandom < numeroUsuario){
            escribirEnHTML("p", "El numero es menor")
        }else{
            escribirEnHTML("p", "El numero es mayor")
        }
        console.log("numero random ", numeroRandom, "numero usuario ", numeroUsuario)
    }
    intentoNumero++
}


function escribirEnHTML (elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerText = texto
}

function generarNumeroRandom (){

    if (numerosRandomUtilizados.length === numeroMaximo){
        escribirEnHTML("p", "Ya ha jugado todos los valores")
        return
    }

        //genera un numero random
    numeroRandom = Math.floor(Math.random()*numeroMaximo)+1

        //verifica que el numero random no este incluido en el array
    if (!numerosRandomUtilizados.includes(numeroRandom)){
        //si no esta lo guarda en el array
        numerosRandomUtilizados.push(numeroRandom)
    }else{

            //si no se han jugado todos los numeros genera un nuevo numero random
            generarNumeroRandom()

    }

}

function limpiarInput (){
    document.getElementById("ValorUsuario").value = ""
}


function reiniciarJuego (){
    // cambiar a parrafo inicial
    escribirEnHTML("p", "ingrese un numero entre 1 y 10")
    //intercambiar estado de botones
    intercambiarDisableButtons()

    //generar un nuevo numero random

    generarNumeroRandom()

    //reiniciar el contador
    intentoNumero = 1
    
}

function intercambiarDisableButtons (){
    let resetButton = document.getElementById("reiniciar")
    resetButton.disabled ? resetButton.removeAttribute("disabled"): resetButton.setAttribute("disabled", "true")

    let intentarButton = document.getElementById("intentar")
    intentarButton.disabled ? intentarButton.removeAttribute("disabled") : intentarButton.setAttribute("disabled", "true")

}


escribirEnHTML("h1", "Juego del numero secreto")
escribirEnHTML("p", "ingrese un numero entre 1 y 10")
generarNumeroRandom()



