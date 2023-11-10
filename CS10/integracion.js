/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.

*/

// punto1: creando el array
let misMascotas = [];

// punto 2: agregando los objetos
misMascotas.push({
  nombre: "Perro",
  raza: "Labrador",
  edad: 4,
  sonido: "Woof",
  obtenerSonidoDoble: function () {
    return this.sonido + " " + this.sonido;
  },
});

misMascotas.push({
  nombre: "Gato",
  raza: "Siames",
  edad: 7,
  sonido: "Meow",
  obtenerSonidoDoble: function () {
    return this.sonido + " " + this.sonido;
  },
});

console.log(misMascotas[0], misMascotas[1]);

// paso 3: funcion aumentar edad
function aumentarEdad() {
  for (let i = 0; i < misMascotas.length; i++) {
    misMascotas[i].edad++;
  }
}
aumentarEdad();
console.log(misMascotas);
//paso 4
function aumentarEdad2() {
  for (let i = 0; i < misMascotas.length; i++) {
    if (misMascotas[i].edad < 6) {
      misMascotas[i].edad += 1;
    } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10) {
      misMascotas[i].edad += 2;
    } else {
      misMascotas[i].edad += misMascotas[i].edad / 2;
    }
  }
}

//aumento la edad
aumentarEdad2();
console.log(misMascotas);

// paso5: funcion para asignar identidicador secuencial
function asignarIdentificadores() {
  for (var i = 0; i < misMascotas.length; i++) {
    misMascotas[i].id = i + 1;
  }
}

asignarIdentificadores();
console.log(misMascotas);

// EJERCICIOS EXTRAS 

/* PALINDROMO  Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe 
retornar true en el caso que sea, y false en el caso que no.    Ejemplo:   palindromo("anilina") debe retornar true  palindromo("Ana") 
debe retornar true  palindromo("Enrique") debe retornar false */ function esPalindromo(
  palabra
) {
  let palabraSinEspacios = palabra.toLowerCase().replace(/\s/g, "");
  let palabraInvertida = palabraSinEspacios.split("").reverse().join("");
  return palabraSinEspacios === palabraInvertida;
}

// Ejemplos de uso:
console.log(esPalindromo("anilina")); // Debería retornar true
console.log(esPalindromo("Ana")); // Debería retornar true
console.log(esPalindromo("Enrique")); // Debería retornar false

/* Manejando dos arreglosDebés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre
 en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.Ejemplo:arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”])
 debe mostrar: Soy 1 y yo soy hSoy 2 y yo soy oSoy 3 y yo soy lSoy 4 y yo soy a */

function arrayHandler(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Los arreglos no tienen la misma longitud");
    return;
  }
  for (var i = 0; i < arr1.length; i++) {
    console.log("Soy " + arr1[i] + " y yo soy " + arr2[i]);
  }
}
arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);