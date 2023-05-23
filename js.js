
const pasajeKg = 1;
const pasajeGr = 1000;

let nombreUsuario = prompt("hola! ingresa tu nombre: ")
alert ("te damos la bienvenida a la calculadora de pasajes kg/gr "+nombreUsuario);

function calcular(){
    if(pasaje == "kg" || pasaje == "KG"){
        let numeroGr = parseInt(prompt("ingrese el número que quieres pasar a Kg:"));
        let multiplicacionGrAKg = (numeroGr * pasajeKg);
        let resultadoKg = (multiplicacionGrAKg / pasajeGr);
        alert("Gr (el número que ingresaste) --> " + numeroGr + "\nKg (resultado) --> " + resultadoKg);
    }else if (pasaje == "gr" || pasaje == "GR"){
        let numeroKg = parseInt(prompt("ingrese el número que quieres pasar a Gr:"));
        let multiplicacionKgAGr = (numeroKg * pasajeGr);
        let resultadoGr = (multiplicacionKgAGr / pasajeKg);
        alert("Kg (el número que ingresaste) --> " + numeroKg + "\nGr (resultado) --> " + resultadoGr);
    }
}
do{
    let pasaje = prompt ("que pasaje necesitas hacer? \n- a KG \n- a GR \n- SALIR");
    calcular();
}while (pasaje == "salir" || pasaje == "SALIR");
