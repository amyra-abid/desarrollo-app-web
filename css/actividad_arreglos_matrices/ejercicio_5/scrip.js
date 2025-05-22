console.log("Conexión exitosa...");

// Función que genera una oración combinando elementos de un arreglo y una matriz
function mostrarOracion() {
    const sujetos = ["La niña", "El niño"];
    const verbos = [
        ["canta", "baila"],
        ["juega", "lee"]
    ];
    const oracion = sujetos[0] + " " + verbos[1][1] + ".";
    alert(oracion);
}
