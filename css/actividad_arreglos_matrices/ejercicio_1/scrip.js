console.log("Conexión establecida correctamente...");

// Función que crea y muestra una oración usando elementos de un arreglo de palabras
function mostrarOracion() {
    const palabras = ["Ana", "salta", "alegremente", "jardín", "rápido"];
    // Construcción de la frase con un orden y estructura diferente
    const frase = `${palabras[0]} ${palabras[1]} ${palabras[4]} por el ${palabras[3]} de manera ${palabras[2]}.`;
    alert(frase);
}
