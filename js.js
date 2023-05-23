
const pasajeKg = 1;
const pasajeGr = 1000;
let pasaje;
let nombreUsuario = prompt("¡Hola! Ingresa tu nombre: ");
alert("Te damos la bienvenida a la calculadora de pasajes kg/gr, " + nombreUsuario + "!");

do {
   let pasaje = prompt("¿Qué pasaje necesitas hacer?\n- a KG\n- a GR\n- SALIR"); 

    if (pasaje == "kg" || pasaje == "KG") {
        let numeroGr = parseInt(prompt("Ingresa el número que quieres pasar a Kg:"));
        let multiplicacionGrAKg = numeroGr * pasajeKg;
        let resultadoKg = multiplicacionGrAKg / pasajeGr;
        alert("Gr (el número que ingresaste) --> " + numeroGr + "\nKg (resultado) --> " + resultadoKg);
    } else if (pasaje == "gr" || pasaje == "GR") {
        let numeroKg = parseInt(prompt("Ingresa el número que quieres pasar a Gr:"));
        let multiplicacionKgAGr = numeroKg * pasajeGr;
        let resultadoGr = multiplicacionKgAGr / pasajeKg;
        alert("Kg (el número que ingresaste) --> " + numeroKg + "\nGr (resultado) --> " + resultadoGr);
    } else{
        alert("hasta luego " +nombreUsuario);
    }
} while (pasaje !== "salir" || pasaje !== "SALIR");