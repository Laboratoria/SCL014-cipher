//import cipher from './cipher.js';
//console.log(cipher);*/

import cipher from './cipher.js';

/*Declaro variable const para llamar al boton cifrar y let ya que 
reasigno valores al numero de desplazamiento y al mensaje, y realizo la expresión
document.getElementById para obtener el elemento por el id, estas id 
son de la caja de texto del mensaje, el numero de desplazamiento y 
los botones creados en el HTML*/

//Llamo al botón cifrar
const btnCod = document.getElementById("btnCifrar");
btnCod.addEventListener("click", () => {
    let string = document.getElementById("msg1").value.toUpperCase();

    let offset = parseInt(document.getElementById("num").value);

    //let resultado = document.getElementById("salidaTexto");
    document.getElementById("mensajeTraducido").innerHTML = cipher.encode(string, offset);
});

//Llamo al botón decifrar
const btnDecod = document.getElementById("btnDecifrar");
btnDecod.addEventListener("click", () => {
    let string = document.getElementById("msg2").value.toUpperCase();

    let offset = parseInt(document.getElementById("num").value);

    //let resultado = document.getElementById("mensajeTraducido");
    document.getElementById("mensajeTraducido").innerHTML = cipher.decode(string, offset);
});