const prompt = require("prompt-sync")({ sigint: true });
let opc = 0;

do{
    opc = parseInt(prompt("Ingresa el ejercicio que deseas ejecutar: \n1. Ejercicio uno. \n2. Ejercicio dos. \n3. Ejercicio tres.\n4. Ejercico cuatro. \n5. Ejercicio cinco. \n0. Salir."));
switch(opc){
    case 1:
        let num = parseInt(prompt("Ingresa un número: "));
        numSiguiente(num);
        break;
    case 2:
        saltando();
        break;
    case 3:
    sumatoria();
    break;
    case 4:
        let numero = parseInt(prompt("Ingresa un número para darle el factorial: "));
        factorial(numero);
        break;
    case 5:
        let fibonacci = parseInt(prompt("Ingrese el número hasta donde desea ver la serie Fibonacci: "));
        secuenciaFibonacci(fibonacci);
        break;
}
}while(opc != 0);

function numSiguiente(num){
    console.log(`Número ingresado: ${num}`);
    for(let i = num; i <= num + 10; i++){
        console.log(i);
    }
}

function saltando(){
    for(let i = 5; i <= 20; i+=3){
        console.log(i);
    }
}

function sumatoria(){
    let sumatoria = 0;
    for (let i = 0; i <= 100; i++) {
        sumatoria += i;
    }
    console.log("La sumatoria de todos los números entre 0 y 100 es: " + sumatoria);
}

function factorial(numero) {
    if (numero === 0) {
        return 1; 
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    console.log(`El factorial de ${numero} es: ${resultado}`);
}

function secuenciaFibonacci(hasta) {
    let num1 = 0;
    let num2 = 1;
    if (hasta >= 1) {
        console.log(num1);
    }
    if (hasta >= 2) {
        console.log(num2);
    }
    for (let i = 3; i <= hasta; i++) {
        const siguienteNumero = num1 + num2;
        if (siguienteNumero <= hasta) {
            console.log(siguienteNumero);
        } else {
            break;
        }
        num1 = num2;
        num2 = siguienteNumero;
    }
}







