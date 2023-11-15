/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

function encontrarMultiplos(num, lim) {
  let multiplos = [];
  for (let i = num; i < lim; i++) {
    if (i % num === 0) {
      multiplos.push(i);
    }
  }
  return multiplos;
}

//probando
let multiplosDe5Hasta50 = encontrarMultiplos(5, 50);
console.log(multiplosDe5Hasta50);

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
// Crear arreglo de objetos estudiantes

// Función para calcular el promedio de notas

// Función para determinar si el estudiante aprobó

// Calcular si los estudiantes aprobaron o no

// Imprimir estado de aprobación de los estudiantes

//CODIGO
const estudiantes = [
  {
    nombre: "Estudiante1",
    notas: [90, 85, 88],
    aprobado: true,
    calcularAprobacion: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      this.aprobado = promedio >= 70;
    },
  },
  {
    nombre: "Estudiante2",
    notas: [78, 92, 89],
    aprobado: true,
    calcularAprobacion: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      this.aprobado = promedio >= 70;
    },
  },
  {
    nombre: "Estudiante3",
    notas: [60, 70, 75],
    aprobado: false,
    calcularAprobacion: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      this.aprobado = promedio >= 70;
    },
  },
  {
    nombre: "Estudiante4",
    notas: [95, 88, 92],
    aprobado: true,
    calcularAprobacion: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      this.aprobado = promedio >= 70;
    },
  },
];

let i = 0;
while (i < estudiantes.length) {
  estudiantes[i].calcularAprobacion();
  i++;
}
i = 0;
while (i < estudiantes.length) {
  console.log(
    `${estudiantes[i].nombre} - Aprobado: ${estudiantes[i].aprobado}`
  );
  i++;
}

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.
*/

let arrayNumero = [1, 54, 23, 43, 12, 56, 8, 3];
let j = 0;
let suma = 0;
while (j < arrayNumero.length) {
  if (arrayNumero[j] % 2 == 0) {
    suma += arrayNumero[j];
  }
  j++;
}
console.log("La suma de los números pares del arreglo es: " + suma);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

function multiplicacionImpares(arrayNumero) {
    let j = 0;
    let producto = 1; 
    while (j < arrayNumero.length) {
      if (arrayNumero[j] % 2 !== 0) {
        producto *= arrayNumero[j];
      }
      j++;
    }
    return producto; 
  }
  const resultado = multiplicacionImpares(arrayNumero);
  console.log(resultado);
/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/
const vehiculo = {
    marca: 'Toyota',
    modelo: 'Camry',
    anio: 2012,
    precio: 15000,
    calcularImpuesto: function() {
      if (this.anio < 2010) {
        return this.precio * 0.10; 
      } else {
        return this.precio * 0.05; 
      }
    }
  };
  const impuestoAPagar = vehiculo.calcularImpuesto();
  console.log("El impuesto a pagar es: $" + impuestoAPagar);
  