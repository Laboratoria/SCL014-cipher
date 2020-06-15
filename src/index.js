import cipher from './cipher.js';
/* qué pasaría si el offset fuera negativo /este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios,
    puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar 
    el soporte para estos casos*/


function validar(){
    var usuario = document.getElementById(usuario);
    var password = document.getElementById(numberUser);
    
    if (usuario == "admin" & password =="123456"){
        document.getElementById("validar").innerHTML="la información fue verificada"
        document.getElementById("userName").value="";
        document.getElementById("numberUser").value="";
    }else{
        document.getElementById("validar").innerHTML = "no se pudo identificar"
        document.getElementById("userName").value="";
        document.getElementById("numberUser").value ="";
    }
}








console.log(cipher);
