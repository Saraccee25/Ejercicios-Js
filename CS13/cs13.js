// PUNTO 1

function generarMatriz5x5() {
  let matriz = [];
  let valor = 1;
  for (let i = 0; i < 5; i++) {
    let fila = [];
    for (let j = 0; j < 5; j++) {
      fila.push(valor);
      valor++;
    }
    matriz.push(fila);
  }
  return matriz;
}

//console.table(generarMatriz5x5());

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    let fila = "";
    for (let j = 0; j < matriz[i].length; j++) {
      fila += "|" + matriz[i][j] + "|";
    }
    console.log(fila);
  }
  console.log("\n\n\n");
}

imprimirMatriz(generarMatriz5x5()); 

// PUNTO 2

function generarMatriz10x10() {
  let matriz = [];
  let valor = 1;
  for (let i = 0; i < 10; i++) {
    let fila = [];
    for (let j = 0; j < 10; j++) {
      fila.push(valor);
      valor++;
    }
    matriz.push(fila);
  }
  return matriz;
}

imprimirMatriz(generarMatriz10x10()); 

matriz1 = generarMatriz10x10();
matriz2 = generarMatriz5x5();

// crear una función que retorne la suma de todos los elementos de la matriz.

function sumaDeLosElementosDeUnaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

console.log(sumaDeLosElementosDeUnaMatriz(matriz1));
console.log(sumaDeLosElementosDeUnaMatriz(matriz2));

//PUNTO 3

// crear una función que nos retorne la sumatoria de la primer y última columna (sumar la primera Y y la última)

function sumarPrimerYUltimaColumna(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[i][0];
    suma += matriz[i][matriz[i].length - 1];
  }
  return suma;
}


let resultadoSuma = sumarPrimerYUltimaColumna(matriz1);

console.log("La sumatoria de la primera y última columna es: " + resultadoSuma);

// crear una función que nos retorne la sumatoria de la quinta y sexta fila (la suma de ambas)

function sumarQuintaYSextaFila(matriz) {
  let sum = 0;
  for (let i = 4; i <= 5; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      sum += matriz[i][j];
    }
  }
  return sum;
}

let resultadoSuma2 = sumarQuintaYSextaFila(matriz1);

console.log("La sumatoria de la quinta y sexta fila es: " + resultadoSuma2);

// Una va a sumar los valores en la diagonal marcada en rojo.

function sumaDiagonalPrincipal(matriz) {
  let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
      suma += matriz[i][i];
    }
  return suma;
}


let resultadoSumaDiagonal = sumaDiagonalPrincipal(matriz1);

console.log("La suma de la diagonal principal es: " + resultadoSumaDiagonal);

// La otra va a marcar los valores de la diagonal marcada en verde.

function sumaDiagonalSecundaria(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][matriz.length - 1 - i]; // tiene que ir al reves entonces se le resta i
    }
    return suma;
  }


let resultadoSumaDiagonalSecundaria = sumaDiagonalSecundaria(matriz1);

console.log("La suma de la diagonal secundaria es: " + resultadoSumaDiagonalSecundaria);