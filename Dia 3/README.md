Documentacion que ire creando segun mi aprendisaje en JS


1. Fundamentos del lenguaje

Tipos de tados: strings, números, booleanos

Strings: Las cadenas son útiles para almacenar datos que se pueden representar en forma de texto. Los cadena literales se pueden especificar usando comillas simples o dobles, que se tratan de manera idéntica, o usando el carácter de comilla invertida ( ` ).

Number: El valor numérico de un objeto que está siendo creado.

Booleanos: 
Los booleanos son un tipo de dato primitivo comúnmente usado en lenguajes de programación. Por definición, un booleano tiene 2 posibles valores: true (verdadero) o false(falso). En JavaScript, frecuentemente se genera de manera implícita la coerción de tipos a booleano

Variables: let, const, var

let: La instrucción let declara una variable de alcance local con ámbito de bloque, la cual, opcionalmente, puede ser inicializada con algún valor.

Const: Las variables constantes presentan un ámbito de bloque tal y como lo hacen las variables definidas usando la instrucción let, con la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. Las constantes no se pueden redeclarar.

Var: Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra reservada var es su contexto de ejecución en curso*,* que puede ser la función que la contiene o, para las variables declaradas afuera de cualquier función, un ámbito global. Si re-declaras una variable Javascript, esta no perderá su valor.


Diferencias

const: se utiliza para declarar una constante que no se puede reasignar.

let: se utiliza para declarar una variable que puede ser reasignada.

var: no se recomienda utilizarla, a menos de que tengamos que ejecutar el código en un ambiente que no soporte ES6 (la versión JavaScript que se lanzó en 2015). Nos permite definir variables al alcance de su función más cercana, osea dentro de la función. Tiene un valor por defecto de undefined

Operadores: aritmeticos, comparacion, logicos

Aritmeticos: 
Suma: se utiliza el operador +. (a + b)
Resta: se utiliza el operador –. (a – b)
Multiplicación: se utiliza el operador asterisco *. (a * b)
División: se utiliza el operador de barra oblicua /. (a / b)
Módulo o resto: % (¡cuidado! En programación no utilizamos el % para operaciones con porcentajes)

Comparacion: El operador de comparacion (==) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta (===), es que este convierte y compara operandos que son de diferentes tipos.

logicos: Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas. Hay dos tipos de operadores lógicos AND y OR. Estos operadores por lo general se escriben && (AND) y || (OR).

Operador lógico AND (&&)
Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

Operador lógico OR ( || )
Este operador lógico compara dos expresiones. Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.



2. Control de flujo


1. Condicionales if, else if, else

Esto te permite ejecutar distintos bloques de código dependiendo de si una condición se cumple o no.

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

También puedes usar else if para agregar más condiciones:

let nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}


2. Operador ternario
Una forma más corta de escribir un if...else:

let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(mensaje);

3. Funciones
Permiten reutilizar bloques de código:

function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Adrián");
Puedes combinar funciones con condicionales:

function verificarEdad(edad) {
  if (edad >= 18) {
    console.log("Bienvenido");
  } else {
    console.log("Debes ser mayor de edad");
  }
}

verificarEdad(16);