/* PRE - EXAMEN FINAL */

//EJERCICIO Nº1

//Dada la matriz
//3x3

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* 
  1) Crear una función que reciba la matriz por parámetro, sume todos los valores de primer diagonal  y retorne la suma.
  2) Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz. */

/* ---------------------------------------------------------- */

// Solución ejercicio 1

function sumarDiagonalPrincipal(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = i; j <= i; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

//probemos

let resultado = sumarDiagonalPrincipal(matriz);
console.log("El resultado de la diagonal principal es: " + resultado);

function valoresParesDeLaMatriz(matriz) {
  let array = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        array.push(matriz[i][j]);
      }
    }
  }
  return array;
}

// probemos

let arrayPar = valoresParesDeLaMatriz(matriz);
console.log(arrayPar);

//EJERCICIO Nº2

//Dado el siguiente arreglo de objetos:

let cuadros = [
  {
    nombre: "Mona Lisa",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La ultima cena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "La noche estrellada",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "El grito",
    creador: "Edvard Munch",
  },
  {
    nombre: "Trigal con cuervos",
    creador: "Vincent van Gogh",
  },
  {
    nombre: "Maria Magdalena",
    creador: "Leonardo Da Vinci",
  },
  {
    nombre: "Amor y Dolor",
    creador: "Edvard Munch",
  },
  {
    nombre: "Ansiedad",
    creador: "Edvard Munch",
  },
];
/* 
    1) Realizar una función llamada filtrarPorCreador que reciba por parámetro el array y el nombre de un artista. Nuestra función deberá retornar un nuevo array que contenga los nombres de las obras de arte que ha realizado el creador recibido por parámetro. Por ejemplo, si se envía por parámetro: (cuadros, “Leonardo Da Vinci”). 
    
    Nuestra función deberá retornar: 
    
    ("Mona Lisa", "La ultima cena", "Maria Magdalena")
  
    */

/* ---------------------------------------------------------- */

function filtrarPorCreador(array, nombreCreador) {
  return array
    .filter((cuadro) => cuadro.creador === nombreCreador)
    .map((cuadro) => cuadro.nombre);
}
let obras = filtrarPorCreador(cuadros, "Leonardo Da Vinci");
console.log(obras);

/* 
  //EJERCICIO Nº3
  
  Realizar una función que mediante el algoritmo de ordenamiento bubbleSort:
  
  1) indique si el arreglo de objetos del EJERCICIO Nº2 se encuentra ordenado alfabéticamente según su creador o no. 
  2) Si está ordenado deberá retornar true. Si no lo está, deberá ordenarlo.  
  3) Realizar el correspondiente llamado a esta función para demostrar su correcto funcionamiento.  
  */

/* ---------------------------------------------------------- */
function bubbleSortPorCreador(array) {
  let ordenado = true;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].creador > array[j + 1].creador) {
        // Intercambiar elementos si están fuera de orden
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        ordenado = false; // Indicar que se realizó un intercambio
      }
    }
  }

  return ordenado;
}

// Ejemplo de uso
let cuadrosOrdenados = bubbleSortPorCreador(cuadros);

if (cuadrosOrdenados) {
  console.log("El arreglo ya está ordenado alfabéticamente por creador.");
} else {
  console.log("El arreglo no estaba ordenado. Se ha ordenado ahora.");
  console.log("Arreglo ordenado:", cuadros);
}
/* 
  //EJERCICIO Nº4
  
  Desarrollar una función para cada uno de las siguientes apartados: 
  
  1) Que reciba por parámetro un número entero y retorne su triple.
  2) Que reciba por parámetro dos números enteros y retorne la multiplicación de ambos.  
  3) Que reciba por parámetro dos números enteros, verificar que sean distintos de 0 y retorne la división de ambos. 
  
  */

/* ---------------------------------------------------------- */
function triplicar(numero) {
  return numero * 3;
}

let resultadoTriple = triplicar(5);
console.log("El triple de 5 es:", resultadoTriple);

function multiplicar(a, b) {
  return a * b;
}

let resultadoMultiplicacion = multiplicar(3, 7);
console.log("El resultado de la multiplicación es:", resultadoMultiplicacion);

function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.log("Error: No se puede dividir por 0.");
    return null;
  }
}

let resultadoDivision = dividir(10, 2);
console.log("El resultado de la división es:", resultadoDivision);

/* 
  //EJERCICIO Nº5
  
  Crear una matriz de 5 x 7.
  Crear una función que reciba la matriz generada por parámetro, sume todos los valores de la fila 4 y retorne la suma.
   */

/* ---------------------------------------------------------- */

function generarMatriz5x7() {
  let matriz = [];

  for (let i = 0; i < 5; i++) {
    let fila = [];
    for (let j = 0; j < 7; j++) {
      fila.push(Math.floor(Math.random() * 10));
    }
    matriz.push(fila);
  }

  return matriz;
}
function sumarFila4(matriz) {
  let suma = 0;
  for (let j = 0; j < matriz[0].length; j++) {
    suma += matriz[4][j];
  }
  return suma;
}
let matrizGenerada = generarMatriz5x7();
console.log("Matriz generada:", matrizGenerada);

let resultadoSumaFila4 = sumarFila4(matrizGenerada);
console.log("La suma de la fila 4 es:", resultadoSumaFila4);


//EJERCICIO Nº6

//Dado el siguiente arreglo de objetos:

let personas = [
  {
    nombre: "Lucia",
    oficio: "Medica",
    edad: 37,
  },
  {
    nombre: "Tiziano",
    oficio: "Programador",
    edad: 9,
  },
  {
    nombre: "Julian",
    oficio: "Chofer",
    edad: 45,
  },
  {
    nombre: "Adriana",
    oficio: "Chef",
    edad: 24,
  },
];

/* 
  
  1) Realizar una función que reciba un array como parámetro, y lo recorra para filtrar las personas cuya edad sea mayor a 25. La función deberá retornar un nuevo arreglo con las personas que cumplan con la condición antes mencionada.
  2) Ejecutar el correspondiente llamado a la función realizada en el inciso anterior para mostrar su correcto funcionamiento. 
  
  */

  function filtrarPorEdad(array) {
    return array.filter(persona => persona.edad > 25);
  }
  

  let personasMayoresDe25 = filtrarPorEdad(personas);
  console.log("Personas mayores de 25 años:", personasMayoresDe25);
  