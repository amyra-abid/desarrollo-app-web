console.log("Conexión establecida correctamente...");

let numeros = [5, 15, 25, 35, 45, 55];

// Función para calcular la suma de dos elementos del arreglo y mostrar el resultado en una alerta
function mensajeConcatenado() {
    let suma = numeros[0] + numeros[4]; // Suma el primer y quinto elemento del arreglo
    let mensaje = "El resultado de la suma es: " + suma;
    alert(mensaje);
}
