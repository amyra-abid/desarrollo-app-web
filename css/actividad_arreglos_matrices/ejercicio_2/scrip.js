console.log("Conexión establecida correctamente...");

// Función que forma y muestra una oración combinando números, sustantivos, adjetivos y verbos
function generarFrase() {
    let elementos = [5, "perros", "blancos", "corren", "rápidamente"];
    let frase = "Hay " + elementos[0] + " " + elementos[2] + " " + elementos[1] + " que " + elementos[3] + " " + elementos[4] + ".";
    alert(frase);
}
