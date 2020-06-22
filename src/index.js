import cipher from './cipher.js';

//console.log(cipher);

//let txtInt = document.getElementById("originalText").value;
//let offNum = document.getElementById("desplazamiento").value;
// let txtCipher = document.getElementById("textoCifrado");

// <----- separación de las variables del cipher---------> 

let enter = document.getElementById("buttonEnter"); // boton de inicio Entrar
let fisrtScreen = document.getElementById("firstScreen");
let nextBtn = document.getElementById("buttonNext");
let newcontactScreen = document.getElementById("newcontactScreen");
let contactList = document.getElementById("contactLog");
let botonListo = document.getElementById("buttonListo");
let goBackMsg = document.getElementById("goBack");
let finalScreen = document.getElementById("msgSent");
let returnMsgPage = document.getElementById("buttonLast");
let fakeCal = document.getElementById("calendarLog");
let backToMsg = document.getElementById("goBackTwo");

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
  finalScreen.className = "welcomeTo";
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
let instructionsBtn = document.getElementById("btnInstructions");
instructionsBtn.addEventListener("click", function () {
  document.getElementById("instructions").style.display = "block";
});

//Botón para cerrar las instrucciones
let exitBtn = document.getElementById("btnClose");
exitBtn.addEventListener("click", function () {
  document.getElementById("instructions").style.display = "none";
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

//Volver a la pantalla de mensajes
backToMsg.addEventListener("click", function () {
  fakeCalendar.className = "hideMe";
  secondScreen.className = "welcomeTo";
});

