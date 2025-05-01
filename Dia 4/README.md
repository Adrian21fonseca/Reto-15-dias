DIA 4    Arrays, Objetos y Funciones

Arrays:

Los arrays son listas ordenadas de elementos.

let frutas = ["manzana", "banana", "uva"];
console.log(frutas[0]); // "manzana"

Metodos Utiles:

.push() - .pop() --> Agregar o gritar elementos al final

.shift() - .unshift() --> Al principio

.length - Cantidad de elemntos

.forEach() - .map() - .filter() --> Para recorrerlos


Objetos:

Los objetos almacenan pares clave-valor.

let persona = {
  nombre: "Adrián",
  edad: 25,
  saludo: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

console.log(persona.edad); // 25
persona.saludo(); // Hola, soy Adrián


Funciones:

Son bloques de código reutilizables.

function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(saludar("Laura")); // Hola Laura


También puedes usar funciones flecha:

const sumar = (a, b) => a + b;