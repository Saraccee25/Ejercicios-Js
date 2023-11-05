function totalAPagar(vehiculo, litrosConsumidos){
    let total=0;
    switch(vehiculo){
        case 'coche': total+= 86;
        break;
        case 'moto': total += 70;
        break;
        case 'autobus': total+= 55;
    }
    if(litrosConsumidos >= 0 && litrosConsumidos <=25){
        total+=50;
    }
    else if(litrosConsumidos > 25){
        total+=25;
    }

    console.log("El total a pagar es: " + total);
}

const prompt = require("prompt-sync")({ sigint: true });

let vehiculo = prompt("Ingrese el tipo de vehiculo: coche, autobus o moto: ");
let litrosConsumidos = parseInt(prompt("Ingrese la cantidad de litros consumidos: "));

totalAPagar(vehiculo, litrosConsumidos);
