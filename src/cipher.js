const cipher = {

  encode:(offNum,txtInt) =>{
    let finOffNum = Number(offNum);
    let result = "";
  
    //Con el length recorremos la palabra
     for (let i = 0; i < txtInt.length; i++) {
      let asciiCode = txtInt[i].charCodeAt(0);  //Sacamos el código ASCII de cada letra 

      if (asciiCode >= 65 && asciiCode <= 90) { //Si son letras mayúsculas (ASCII 65-90)
        result = result + String.fromCharCode((asciiCode - 65 + finOffNum) % 26 + 65); 
      }

      else if (asciiCode >= 97 && asciiCode <= 122) { //Si son minúsculas (ASCII 97-122)
        result = result + String.fromCharCode((asciiCode - 97 + finOffNum) % 26 + 97);
      }
      else {
         result = result + txtInt.charAt(i); //Si no es una letra lo tomará igual, sin cambios
      }
     }

    return result;
  },
  
 
  decode:(offNum,txtInt) => {
    let finOffNum = Number(offNum);
    let result = "";

    finOffNum = (26 - offNum) % 26;

    for (let i = 0; i < txtInt.length; i++) {
      let asciiCode = txtInt[i].charCodeAt(0);
      
      if (asciiCode >= 65 && asciiCode <= 90) { 
        result = result + String.fromCharCode((asciiCode - 65 + finOffNum) % 26 + 65); 
      }
      else if (asciiCode >= 97 && asciiCode <= 122) {
        result = result + String.fromCharCode((asciiCode - 97 + finOffNum) % 26 + 97);
      }
      else {
        result = result + txtInt.charAt(i); 
      }
    }
    
    return result;
  }
}

export default cipher;