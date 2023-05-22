
let nombreUsuario = prompt("hola! ingresa tu nombre: ")
alert ("te damos la bienvenida a la calculadora de pasajes kg/gr "+nombreUsuario);
let pasaje = prompt ("que pasaje necesitas hacer? \n- a KG \n- a GR \n- SALIR");

    if(pasaje == "kg"||"KG"){
        let numeroGr = parseInt(prompt("ingrese el número que quieres pasar a Kg:"));
        let multiplicacionGrAKg = numeroGr * pasajeKg;
        let resultadoKg = multiplicacionGrAKg / pasajeGr;
        alert ("Kg " +resultadoKg);
    }else if (pasaje == "gr"||"GR") {
        let numeroKg = parseInt(prompt("ingrese el número que quieres pasar a Gr:"));
        let multiplicacionKgaGr = (numeroKg * pasajeGr);
        alert (+multiplicacionKgaGr ("Gr"));
    }else if (pasaje == "salir"||"SALIR"){
        alert("Presiona ¨aceptar¨ para salir de la calculadora");
    } else{
        alert("Opción inválida");
    }

const pasajeKg = 1;
const pasajeGr = 1000;