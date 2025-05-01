// Arrays

// Ejercicio 1: Crear un array de numeros

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

// ejercicio 2: filtrar los numeros mayores que 3

let mayoresQueTres = numeros.filter(num => num > 3);
console.log(mayoresQueTres);

// ejercicio 3: multiplicar los numeros por 2

let multiplicados = numeros.map(num => num * 2);
console.log(multiplicados);

// Objetos

// Ejercicio 1: Crear un objeto con propiedades y valores

let mascota = {
    nombre: "Oso",
    edad: 3,
    tipo: "perro",
    raza: "Criollo"
};

function miMascota(){
    console.log(`Mi mascota se llama ${mascota.nombre}, es un ${mascota.tipo} ${mascota.raza} y tiene ${mascota.edad} años.`);
}

miMascota();


// Funciones

// Ejercicio 1: Crear una función que resiba un numero y devuelva si es par o impar

function parImpar(num){
    if(num % 2 === 0){
        console.log(`${num} es par`)
    } else{
        console.log(`${num} es impar`)
    }
}

parImpar(11)


// Ejercicio 2: Crear una función que reciba un array y devuelva la suma de sus elementos

function sumaArrays(arr){
    let suma = 0;

    for (let i = 0;  i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

let numeros1 = [1, 3, 5, 10];
console.log(sumaArrays(numeros1));