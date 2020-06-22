import cipher from './cipher.js';

//console.log(cipher.encode(), cipher.decode());

// <----- separación de las variables del cipher---------> 
let enter = document.getElementById("buttonEnter");
let fisrtScreen = document.getElementById("firstScreen");
let secondScreen = document.getElementById("secondScreen");
let nextBtn = document.getElementById("buttonNext");
let contactScreen = document.getElementById("contactScreen");
let newcontactScreenTwo = document.getElementById("newcontactScreenTwo");
let newcontactScreen = document.getElementById("newcontactScreen");
let contactList = document.getElementById("contactLog");
let addBackTwo = document.getElementById("addContactNewTwo");
let addBack = document.getElementById("addContactTwo");
let botonListo = document.getElementById("buttonListo");
let goBackMsg = document.getElementById("goBack");
let msgSent = document.getElementById("msgSent");
let returnMsgPage = document.getElementById("buttonLast");
let fakeCal = document.getElementById("calendarLog");
let backToMsg = document.getElementById("goBackTwo");
let exitBtn = document.getElementById("btnClose");
let instructionsBtn = document.getElementById("btnInstructions");
let clearContent = document.getElementById("clearContent");
let fakeCalendar= document.getElementById("fakeCalendar");
let addNewCnt = document.getElementById("addContact");



// Funcion de limpiar la consola 
clearContent.addEventListener("click", function () {
  document.getElementById("originalText").value = " ";
  document.getElementById("textoCifrado").innerHTML = " ";

});

// funcion de cifrar
document.getElementById("cifrarTexto").addEventListener('click', () => {
  let offNum = document.getElementById("desplazamiento").value;
  let txtInt = document.getElementById("originalText").value;
  document.getElementById("textoCifrado").innerHTML = cipher.encode(offNum, txtInt);
});

// funcion de descifrado
document.getElementById("descifrarTexto").addEventListener('click', () => {
  let offNum = document.getElementById("desplazamiento").value;
  let txtInt = document.getElementById("originalText").value;
  document.getElementById("textoCifrado").innerHTML = cipher.decode(offNum, txtInt);
});

//Copiar mensaje al portapapeles
document.getElementById("copy").addEventListener('click', () => {
  const mensajeCodificado = document.getElementById('textoCifrado');
  mensajeCodificado.select();
  mensajeCodificado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //console.log(mensajeCodificado);
})

//Entrar a la aplicación
enter.addEventListener("click", function () {
  fisrtScreen.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

//Enviar el mensaje codificado
nextBtn.addEventListener("click", function () {
  secondScreen.className = "hideMe";
  newcontactScreen.className = "welcomeTo";
});

//Botón para agregar nuevo contacto
botonListo.addEventListener("click", function () {
  newcontactScreen.className = "hideMe";
  msgSent.className = "welcomeTo";
});

//Añadir contacto 
addNewCnt.addEventListener("click", function (){
  contactScreen.className ="hideMe";
  newcontactScreenTwo.className = "welcomeTo";
});

//nueva pantalla de contactos volver atras
addBack.addEventListener("click", function(){
  newcontactScreenTwo.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

// pantalla de volver atras en contactos
addBackTwo.addEventListener("click", function(){
  newcontactScreenTwo.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

//Pantalla de los contactos agregados
contactList.addEventListener("click", function () {
  secondScreen.className = "hideMe";
  contactScreen.className = "welcomeTo";
  let userName = document.getElementById("userName").value;
  let firstContact = document.getElementById("contactName").value;
  document.getElementById("allContacts").innerHTML = "Hola " + userName + ", estos son los contactos recientemente añadidos:";
  document.getElementById("ContactOne").innerText = firstContact;
});

//Botón para volver a la pantalla anterior
goBackMsg.addEventListener("click", function () {
  contactScreen.className = "hideMe";
  secondScreen.className = "welcomeTo";
});


//Funciones del Popup
//Botón al abrir las instrucciones
instructionsBtn.addEventListener("click", function () {
  document.getElementById("instructions").style.display = "block";
});

//Botón para cerrar las instrucciones
exitBtn.addEventListener("click", function () {
  document.getElementById("instructions").style.display = "none";
});

//Volver a la pantalla de mensajes
backToMsg.addEventListener("click", function () {
  fakeCalendar.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

//Volver a la pantalla de mensajes
returnMsgPage.addEventListener("click", function () {
  msgSent.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

//Abrir el calendario falso
fakeCal.addEventListener("click", function () {
  secondScreen.className = "hideMe";
  fakeCalendar.className = "welcomeTo";
});


