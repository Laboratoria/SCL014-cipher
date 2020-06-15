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



var enter = document.getElementById("buttonEnter");
var fisrtScreen = document.getElementById("firstScreen");
var secondScreen = document.getElementById("secondScreen");

enter.addEventListener("click", function(){
    fisrtScreen.className = "hideMe";
    secondScreen.className = "welcomeTo"; 
  });


var siguiente = document.getElementById("buttonNext");
var newcontactScreen = document.getElementById("newcontactScreen");

siguiente.addEventListener("click", function(){
  secondScreen.className = "hideMe";
  newcontactScreen.className = "welcomeTo";
});



var contactScreen = document.getElementById("contactScreen");
var botonListo = document.getElementById("buttonListo");

botonListo.addEventListener("click", function(){

newcontactScreen.className ="hideMe";
  contactScreen.className = "welcomeTo";

  var userName = document.getElementById("userName").value;
  var firstContact = document.getElementById("contactName").value;
 document.getElementById("allContacts").innerHTML = "Hola " + userName + ", en caso de emergencia enviaremos el mensaje a tus contactos favoritos"; 
document.getElementById("ContactOne").innerText = firstContact;
});


var addContact = document.getElementById("buttonadd");
addContact.addEventListener("click", function(){
  newcontactScreen.className ="welcomeTo";
}
)





console.log(cipher);
