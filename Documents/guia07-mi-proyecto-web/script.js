function saludar() {
let nombre = document.getElementById("nombre").value.trim();

if (nombre === "") {
document.getElementById("resultado").innerText =
"Por favor, ingresa un nombre válido.";
} else {
document.getElementById("resultado").innerText =
"Hola " + nombre + ", bienvenido al sistema.";
}
}

function validarCorreo() {
let correo = document.getElementById("correo").value.trim();

if (correo === "") {
document.getElementById("mensajeCorreo").innerText =
"Debe ingresar un correo.";
} else if (!correo.includes("@") || !correo.includes(".")) {
document.getElementById("mensajeCorreo").innerText =
"Correo no válido.";
} else {
document.getElementById("mensajeCorreo").innerText =
"Correo registrado correctamente.";
}
}