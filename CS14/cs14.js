//Ejercicio 1
//A
const edades = [33, 27, 34, 30, 34, 25];
//imprimimos edades antes de ordenar
console.log("Edades sin ordenar " + edades);
function bubbleSort(edades){
    for(let i = 0; i < edades.length; i++) {
        for(let j = 0; j < edades.length - 1; j++) {
            if(edades[j] > edades[j + 1]) {
                let num = edades[j]
                edades[j] = edades[j + 1]
                edades[j + 1] = num
            }
        }
    }
    return edades;
}

//llamamos la funcion
bubbleSort(edades);
console.log("Edades ordenadas " + edades);

//B

function bubbleSortDesc(edades){
    for(let i = 0; i < edades.length; i++) {
        for(let j = 0; j < edades.length - 1; j++) {
            if(edades[j] < edades[j + 1]) {
                let num = edades[j]
                edades[j] = edades[j + 1]
                edades[j + 1] = num
            }
        }
    }
    return edades;
}
//llamamos la funcion
bubbleSortDesc(edades);
console.log("Edades ordenadas descendentemente " + edades);

//Ejercicio 2
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"];

console.log("Letras desordenadas " + letras)

function ordenarAlfabeticamente(letras){
    for(let i = 0; i < letras.length; i++) {
        for(let j = 0; j < letras.length - 1; j++) {
            if(letras[j] > letras[j + 1]) {
                let num = letras[j]
                letras[j] = letras[j + 1]
                letras[j + 1] = num
            }
        }
    } 
}

ordenarAlfabeticamente(letras);
console.log("Letras ordenadas " + letras)

//EJERCICIO 3

const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]
    console.log("Sin ordenar:")
    console.log( arrayCuentas)

    function ordenarPorSaldo(arrayCuentas){
        for(let i = 0 ; i < arrayCuentas.length; i++){
            for(let j = 0 ; j < arrayCuentas.length - 1 ; j++){
                if(arrayCuentas[j].saldo > arrayCuentas[j + 1].saldo){
                    let num = arrayCuentas[j]
                    arrayCuentas[j] = arrayCuentas[j + 1]
                    arrayCuentas[j + 1] = num
                }
            }
        }
    }
    ordenarPorSaldo(arrayCuentas);
    console.log("Ordenado:")
console.log(arrayCuentas)

function ordenarPorEdad(arrayCuentas) {
    for (let i = 0; i < arrayCuentas.length; i++) {
        for (let j = 0; j < arrayCuentas.length - 1; j++) {
            if (arrayCuentas[j].edadTitular > arrayCuentas[j + 1].edadTitular) {
                let temp = arrayCuentas[j];
                arrayCuentas[j] = arrayCuentas[j + 1];
                arrayCuentas[j + 1] = temp;
            }
        }
    }
    return arrayCuentas;
}


const arrayCuentasOrdenadoPorEdad = ordenarPorEdad(arrayCuentas);

console.log("Ordenado por Edad:");
console.log(arrayCuentasOrdenadoPorEdad);