/*
Challenge Amigo Secreto Alura - G8 - marzo 2025
El principal objetivo de este desafío es fortalecer las habilidades en lógica de programación.

 Estos son los pasos para crear la app de Amigo Secreto. 
 1. Manejar input del usuario. 
 2. Agregar este input a la lista de amigos y mostrar la lista en la página. 
 3. Seleccionar un amigo del array de amigos. 
 4. Reiniciar.
 */

 // Paso 1: Manejar input del usuario.
let arrayDeAmigos = [];
let nombreAmigo = "";
let listaAmigosUL = document.getElementById('listaAmigos');
let enterYaFueLlamado = false;

function chequearEnter() {
    if (enterYaFueLlamado) return;

    enterYaFueLlamado = true;

    var input = document.getElementById("amigo");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("boton").click();
            return;
        }
    });
}

//Paso 2: Agregar amigos al array y mostrarlos en la lista.
//Paso 2.1: agregar nombres al array.
function agregarAmigo() {
    let esNumero = /\d/.test(nombreAmigo);
    
    if (esNumero) {
        console.log("Tiene un número.");
        alert("Por favor, ingrese un nombre válido. Se aceptan letras, espacios y caracteres especiales.");
        nombreAmigo="";
        return;
    } else {
        console.log("No tiene un número.");
        nombreAmigo = document.getElementById('amigo').value;
        arrayDeAmigos.push(nombreAmigo);
        console.log(arrayDeAmigos);
        actualizarListaAmigos();
        limpiarCaja();
        nombreAmigo = "";
        return;
    }
}

//Paso 2.2: mostrar los nombres de la lista al usuario.
function actualizarListaAmigos(){
    listaAmigosUL.innerHTML="";
    arrayDeAmigos.forEach(amigo => {
        const ul = document.createElement("ul");
        ul.textContent = amigo; 
        listaAmigosUL.appendChild(ul);
    });
}

function limpiarCaja(){
    document.querySelector('#amigo').value = "";
}

//Paso 3: seleccionar amigo de la lista.
function sortearAmigo() {
    let i = Math.floor(Math.random()*arrayDeAmigos.length)
    let seleccionado = arrayDeAmigos[i];
    let final = document.getElementById('resultado');
    final.innerHTML = `<p>¡El amigo seleccionado es ${seleccionado}!</p>`
    if (arrayDeAmigos.length === 0) {
        final.innerHTML = `<p>¡No hay amigos para el sorteo! Por favor, ingrese amigos.</p>`
    }
}

//Paso 4: Reiniciar. 
let botonReiniciar = document.getElementById("reinicio");
function reiniciar(){
    botonReiniciar.addEventListener("click", function() {
    limpiarCaja();
    arrayDeAmigos = [];
    nombreAmigo = "";
    listaAmigosUL.innerHTML="";
    })
}