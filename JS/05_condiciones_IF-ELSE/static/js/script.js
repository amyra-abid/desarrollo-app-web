/*✅ Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra
"Acceso permitido".
 Si no, muestra "Acceso denegado". */

function mayoriaEdad1() {
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado").innerHTML = `<p>Es mayor de Edad: ${edad}</p>`;
    } else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>Es menor de Edad: ${edad}</p>`;
    } else {
        document.getElementById("resultado").innerHTML = `<p>El valor <strong>${edad}</strong> es inválido.</p>`;
    }
}


/* ✅ Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */
function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } 
    else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
    }
}

/*✅ Ejercicio 3: Control de tareas
Declara el arreglo tareas con 6 tareas predefinidas.
Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
Si tiene 5 o menos, muestra "Lista aceptable".*/
let tareas = ["hacer la compra","limpiar la casa", "estudiar para el examen",
    "ir al gimnasio","leer un libro","preparar la cena"];

function controlTareas(){
    if (tareas.length > 5){
        tareas.pop();
        document.getElementById("resultado2").innerHTML =
        `<p>Lista de tareas actualizada: $  {tareas.join(" ,")} .</p>`
    }
    else if (tareas.length <= 5){
        document.getElementById("resultado2").innerHTML =
        `<p>Lista aceptables: $  {tareas.join(" ,")} .</p>;`
    }
    else {
        document.getElementById("resultado2").innerHTML =
        `<p>El valor  <strong>${tareas.length}</strong>  </p>;`
    }

}
