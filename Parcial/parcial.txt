//Desarrollo del parcial

//EJERCICIO 1

function operandoNumerosPares(num1, num2) {
  if (num1 % 2 == 0 && num2 % 2 == 0) {
    return num1 + num2;
  } else if (num1 % 2 == 0 || num2 % 2 == 0) {
    return num1 * num2;
  } else {
    return "ninguno es par";
  }
}

//PROBEMOS

let num1 = 3;
let num2 = 4; //deberia hacer la multiplicación

let resultado = operandoNumerosPares(num1, num2);
console.log("El resultado fue: " + resultado); //FUNCIONA

//PROBEMOS CON OTROS NUMEROS

num1 = 8;
num2 = 6; //debería dar la suma
resultado = operandoNumerosPares(num1, num2);
console.log("El resultado fue: " + resultado); //FUNCIONA

//EJERCICIO 2
//parte 1
let ciclista = {
  nombre: "JCarlos",
  apellido: "Arango",
  edad: 18,
  tieneBici: true,
};

console.log("Nombre:", ciclista.nombre);
console.log("Apellido:", ciclista.apellido);
console.log("Edad:", ciclista.edad);
console.log("Tiene Bici:", ciclista.tieneBici);

//parte 2
function puedeCompetir(ciclista) {
  if (ciclista.edad >= 18 && ciclista.tieneBici) {
    return "Puede competir";
  } else if (ciclista.tieneBici && ciclista.edad < 18) {
    return "Podrá competir pero con un adulto acompañante";
  } else {
    return "No podrá competir";
  }
}

console.log(puedeCompetir(ciclista));

//EJERCICIO 3
let libros = [];

let historiasInconscientes = {
  anio: 2013,
  autor: "Gabriel Rolón",
  paginas: 352,
};
let elAlquimista = {
  anio: 1988,
  autor: "Paulo Coehlo",
  paginas: 192,
};
let elCampamento = {
  anio: 2021,
  autor: "Blue Jeans",
  paginas: 480,
};
let operacionMasacre = {
  anio: 2009,
  autor: "Rodolfo Walsh",
  paginas: 236,
};

libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);

console.log("Antes de la modificación:");
console.log(libros);

function agregarEpoca(librosArray) {
  librosArray.forEach((libro) => {
    if (libro.añoLanzamiento < 2020) {
      libro.epoca = "pre-pandemia";
    } else {
      libro.epoca = "post-pandemia";
    }
  });
}

agregarEpoca(libros);
console.log("Después de la modificación:");
console.log(libros);