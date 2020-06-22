//creación de la función para decifrar
const cipher = {
    encode: (string, offset) => {
        //recorrido de muchas vueltas
        let offsetString = parseInt(offset);
        offsetString = (1092 + offset) % 26;
        //se crea variable para resultado la cual debe ir vacía "" para así reflejar el resultado
        let textoCifrado = "";
        //ciclo de desplazamiento de la letra: varible + constante + comportamiento
        for (let i = 0; i < string.length; i++) {
            //se agrega el charCodeAt para convertir las letras
            let texto = string.charCodeAt(i);
            //formula del cifrado con sus condiciones
            if (65 <= texto && texto <= 90) {
                textoCifrado += String.fromCharCode((texto - 65 + offsetString) % 26 + 65);
            } else if (97 <= texto && texto <= 122) {
                textoCifrado += String.fromCharCode((texto - 97 + offsetString) % 26 + 97);
            }

        }
        return textoCifrado;
    },

    decode: (string, offset) => {
        //recorrido demuchas vueltas
        let offsetString = parseInt(offset);
        offsetString = (1092 + offset) % 26;
        //se crea variable para resultado la cual debe ir vacía "" para así reflejar el resultado
        let textoDecifrado = "";
        //ciclo de desplazamiento de la letra: varible + constante + comportamiento
        for (let i = 0; i < string.length; i++) {
            //se agrega el charCodeAt para convertir en ascii las letras
            let texto = string.charCodeAt(i);
            //formula del cifrado con codiciones
            if (65 <= texto && texto <= 122) {
                textoDecifrado += String.fromCharCode((texto - 90 - offsetString) % 26 + 90);
            } else if (97 <= texto && texto <= 122) {
                textoDecifrado += String.fromCharCode((texto - 122 - offsetString) % 26 + 122);
            }

        }
        return textoDecifrado;
    }
}

export default cipher;