console.log("Conexión establecida correctamente...");

// Función que calcula la suma de dos números seleccionados dentro de una matriz bidimensional
function sumarElementos() {
    const numeros = [
        [12, 25, 37],
        [48, 53, 61],
        [72, 84, 96]
    ];
    // Sumamos el valor en la primera fila, tercer elemento y el último elemento de la última fila
    const total = numeros[0][2] + numeros[2][2]; // 37 + 96
    alert("La suma de 37 y 96 es: " + total);
}
