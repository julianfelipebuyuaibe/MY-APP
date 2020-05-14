const user = document.getElementById("name")
const Nombre = document.getElementById("name")
const Apellidos = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const Telefono = document.getElementById("Telefono")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()

    let warnings = ""

    let entrar = false

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    parrafo.innerHTML = ""

    if(user.value.length <6){

        warnings += `El user no es valido <br>`

        entrar = true
    }


    if(Nombre.value.length <10){

        warnings += `El Nombre no es valido <br>`

        entrar = true
    }
    if(Apellidos.value.length <10){

        warnings += `El Apellidos no es valido <br>`

        entrar = true
    }
    if(!regexEmail.test(email.value)){

        warnings += `El email no es valido <br>`

        entrar = true
    }
    if(pass.value.length < 8){

        warnings += `La contraseña no es valida <br>`

        entrar = true
    }


    if(Telefono.value.length < 11){

        warnings += `El Telefono no es valido <br>`

        entrar = true
    }





    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})