// Ejercicio 1
function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado").innerHTML =
        `<p>Es mayor de Edad: ${edad} </p>`;
    }else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML =
        `<p>Es menor de Edad: ${edad} </p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}

// Ejercicio 2
function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
} else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
}

}

// Ejercicio 3
function controlTareas() {
    let tareas = ["tarea1", "tarea2", "tarea3", "tarea4", "tarea5", "tarea6"];
    if (tareas.length > 5) {
        tareas.pop();
        document.getElementById("resultado").innerHTML =
        `<p>Tareas ajustadas: ${tareas.join(", ")}</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>Lista aceptable</p>`;
    }
}

// Ejercicio 4
function validarCola() {
    let cola = ["sinNombre", "Pedro", "Lucia"];
    if (cola[0] === "sinNombre") {
        cola.shift();
        document.getElementById("resultado").innerHTML =
        `<p>Nuevo orden de cola: ${cola.join(", ")}</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>Cola correcta</p>`;
    }
}

// Ejercicio 5
function saludoCondicional() {
    let nombre = prompt("Ingrese su nombre:");
    if (nombre.trim() !== "") {
        let saludos = [];
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("resultado").innerHTML =
        `<p>${saludos[0]}</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        `<p>Nombre no valido</p>`;
    }
}

// Ejercicio 6
function calificarNota() {
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7:"));
    if (nota >= 6) {
        document.getElementById("resultado").innerHTML = "<p>Excelente</p>";
    } else if (nota >= 4) {
        document.getElementById("resultado").innerHTML = "<p>Aprobado</p>";
    } else {
        document.getElementById("resultado").innerHTML = "<p>Reprobado</p>";
    }
}

// Ejercicio 7
function registroVisitantes() {
    let visitas = [];
    let persona = prompt("Ingrese su nombre:");
    if (persona.trim() !== "") {
        visitas.unshift(persona);
        document.getElementById("resultado").innerHTML =
        `<p>Visitas registradas: ${visitas.join(", ")}</p>`;
    } else {
        document.getElementById("resultado").innerHTML =
        "<p>Error: nombre vacío</p>";
    }
}

// Ejercicio 8
function controlStock() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Ingrese el producto:");
    if (stock.includes(productoSolicitado)) {
        document.getElementById("resultado").innerHTML = "<p>Producto disponible</p>";
    } else {
        stock.push(productoSolicitado);
        document.getElementById("resultado").innerHTML = 
        `<p>Producto agregado al stock: ${stock.join(", ")}</p>`;
    }
}

// Ejercicio 9
function verificarInvitado() {
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("Ingrese su nombre:");
    if (invitados.includes(persona)) {
        document.getElementById("resultado").innerHTML = `<p>Bienvenido, ${persona}</p>`;
    } else {
        document.getElementById("resultado").innerHTML = "<p>No estas en la lista</p>";
    }
}

// Ejercicio 10
function evaluarRol() {
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Ingrese el rol:");
    if (rol === "Admin") {
        usuarios.unshift(rol);
        document.getElementById("resultado").innerHTML = "<p>Rol prioritario agregado</p>";
    } else {
        usuarios.push(rol);
        document.getElementById("resultado").innerHTML = "<p>Rol agregado</p>";
    }
}