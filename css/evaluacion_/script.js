// Función que recibe un número como parámetro y devuelve un string con los números impares desde 1 hasta n
function obtenerImpares(n) {
    let impares = [];
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    return impares.join(', ');
}

// Función que se ejecuta cuando el usuario presiona el botón
function mostrarImparesDesdeInput() {
    const input = document.getElementById('numero').value;
    const num = parseInt(input);

    // Validación para que sea un número entero positivo
    if (isNaN(num) || num < 1) {
        alert('Por favor, ingresa un número entero positivo mayor o igual a 1.');
        return;
    }

    const resultado = obtenerImpares(num);

    alert(resultado);
    console.log(resultado);
}
