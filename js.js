let titulo = document.getElementById("titulo");
titulo.style.font="bold 50px monospace";
const pasajeKg = 1;
const pasajeGr = 1000;
let nombreUsuario = prompt("¡Hola! Ingresa tu nombre: ");
alert("Te damos la bienvenida a la calculadora de pasajes kg/gr, " +nombreUsuario + "! \nEn consola podras ver un historial de tus resultados!");
let datos = [];
console.log("Historial de resultados: ");

let pasaje = prompt("¿Que pasaje necesitas hacer?\n- a KG\n- a GR\n- SALIR");

while (pasaje.toLowerCase() != "salir") {
    if (pasaje.toLowerCase() == "kg"){
        let numeroGr = parseInt(prompt("Ingresa el número que quieres pasar a Kg: "));
        let multiplicacionGrAKg = numeroGr * pasajeKg;
        let resultadoKg = multiplicacionGrAKg / pasajeGr;
        datos.push(" " +numeroGr + "-->" +resultadoKg + "Kg");
        alert("Gr (el número que ingresaste) --> " + numeroGr + "\nKg (resultado) --> " + resultadoKg);
    }else if (pasaje.toLowerCase() == "gr"){
        let numeroKg = parseInt(prompt("Ingresa el número que quieras pasar a Gr: "));
        let multiplicacionKgAGr = numeroKg * pasajeGr;
        let resultadoGr = multiplicacionKgAGr / pasajeKg;
        datos.push(" " +numeroKg + "-->" +resultadoGr + "Gr");
        alert("Kg (el número que ingresaste) --> " + numeroKg + "\nGr (resultado) --> " + resultadoGr);
    }else{
        alert("Opción inválida. Inténtalo nuevamente.");
    }
    pasaje = prompt("¿Quieres volver a haer un pasaje?\n- a KG\n- a GR\n- SALIR");
}
alert("Hasta luego, " + nombreUsuario + "!");
datos.reverse();
console.log(datos);

const datoTabla = datos.filter ((datos) => datos.includes("Kg"));
const datoTablaDos = datos.filter ((datos) => datos.includes("Gr"));
console.tabla(datoTabla);
console.tabla(datoTablaDos);