//! Esto es un comentario ctrl k+ ctrl c
//!Lo omite el programa cuando se ejecuta
//! es info para mi

//*Variables
//? var nombre = "Juan"; //variable global
//? let apellido = "Perez"; //variable local
//? const edad = 30; //variable constante

//*Sintaxis --> Reglas del lenguaje //no String
let tituloTarea= "Comprar café y Pan"; //segunda palabra empieza con una mayuscula, la primera minuscula
const fechaCreacion = "19/06/2026"; //constante, no cambia
let precio = 5; 
const pi=3.1417;

console.log(tituloTarea); //metodo  usa alt+shift arriba o abajo
console.log(fechaCreacion); //metodo

tituloTarea = "Comprar leche"; //cambia el valor de la variable
console.log(tituloTarea); //metodo

// fechaCreacion = "20/06/2026"; //no se puede cambiar el valor de una constante
// console.log(fechaCreacion); //metodo


//! Tipos de datos:

//& String --> cadena de texto
let mensaje = "Hola mundo"; //cadena de texto

//& number
let unNumero = 10; //numero entero
let otroNumero = 10.5; //numero decimal

//& boolean --> true o false

let esVerdadero = false; //booleano

//& undefined vs null --> variable sin valor
let descripcion; //variable sin valor
let descripcionNull = null; //variable con valor nulo

console.log(descripcion); //undefined
console.log(descripcionNull); //null

//! Operadores 
console.log("Acá empiezan los operadores aritméticos:");

//*Operadores aritméticos
//* + - * / %
let num1=5;
let num2 = 5;

//alt+shift+arriba o abajo para mover la linea de codigo

console.log("Suma: ", (num1 + num2)); //10
console.log("Resta: ", (num1 - num2)); //0
console.log("Multiplicación: ", (num1 * num2)); //25
console.log("División: ", (num1 / num2)); //1
console.log("Módulo: ", (num1 % num2)); //0

//& Comparación --> ==, ===, !=, !==, >, <, >=, <=
console.log("Acá empiezan los operadores de comparación:");

const prioridadA = 5;
const prioridadB = 5;

console.log(prioridadA > prioridadB); //true
console.log(prioridadA < prioridadB); //false
console.log(prioridadA === prioridadB); //false
//console.log(prioridadA == prioridadB); //false

//& Lógicos --> &&, ||, !
console.log("Acá empiezan los operadores lógicos:");

const prioridadAlta = true;
const completada = false;

console.log(prioridadAlta && !completada); //true
console.log(prioridadAlta || !completada); //true
