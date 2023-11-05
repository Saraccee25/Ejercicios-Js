const prompt = require("prompt-sync")({ sigint: true });
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));
if(edad<18) { 
console.log("No puede pasar al bar.");
edadImpar(edad);
} 
else if(edad<21){ 
console.log("Puede pasar al bar, pero no puede tomar alcohol.");
edadImpar(edad);
} 
else if(edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    edadImpar(edad);
}
else{ 
console.log("Felicidades por haber llegado a la mayoría de edad. Puede pasar al bar y tomar alcohol.");
edadImpar(edad);
} 

function edadImpar(edad){
    if(edad % 2 != 0){
        console.log("¿Sabías que tu edad es impar?");
    } 
}