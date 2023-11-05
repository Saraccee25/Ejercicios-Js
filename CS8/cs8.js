// defino el array para almacenar las peliculas
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];
//confirmando la creacion del array
console.log(peliculas[2]);

//funcion que convierte en mayusculas
function convertirMayusculas(peliculas){
    for(let i = 0; i < peliculas.length; i++){
        peliculas[i] = peliculas[i].toUpperCase();
    }
}
//probando
convertirMayusculas(peliculas);
console.log(peliculas);

//defino el segundo array de peliculas
let peliculas2 = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

//declaro la funcion para unir las peliculas
function uniendoPelis(array1, array2){
    let eliminados = peliculas.pop();
    let peliculasCombinadas = array1.concat(array2);
    convertirMayusculas(peliculasCombinadas);
    return peliculasCombinadas;
}

//probando
let peliculasCombinadas = uniendoPelis(peliculas, peliculas2);
console.log(peliculasCombinadas);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
console.log('Calificaciones de Asia: ', asiaScores);
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 
console.log('Calificaciones de Europa: ', euroScores);

function comparandoPuntajes(asiaScores, euroScores){
    for(let i = 0; i < asiaScores.length; i++){
        if(asiaScores[i] != euroScores[i]){
            return console.log("Puntajes diferentes");
        }
    }
    return console.log("Puntajes iguales");
}
comparandoPuntajes(asiaScores, euroScores);

// extra bonus

let arrayNumeros = [2,4,6,8,10,12];

function imprimirInverso(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
}

imprimirInverso(arrayNumeros);

function inversor(array) {
    const arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  inversor(arrayNumeros);

  function sumaArray(arr) {
    if (arr.length !== 3) {
      return "El arreglo debe contener exactamente 3 elementos.";
    }
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }
 
  console.log(sumaArray([1, 2, 3]));          
  console.log(sumaArray([10, 3, 10]));      
  console.log(sumaArray([-5, 100, 19]));     
  
  function join(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  console.log(join(["h", "o", "l", "a"])); // "hola"
  console.log(join(["c", "h", "a", "u"])); // "chau"
  