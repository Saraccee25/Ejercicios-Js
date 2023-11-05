
function calcularPrecioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
  
  let precioBase = 0;

  switch (base) {
    case "pollo":
      precioBase = 150;
      break;
    case "carne":
      precioBase = 200;
      break;
    case "veggie":
      precioBase = 100;
      break;
    default:
     
      return "Tipo de sándwich base no válido";
  }
  let precioPan = 0;
  switch (pan) {
    case "blanco":
      precioPan = 50;
      break;
    case "negro":
      precioPan = 60;
      break;
    case "s/gluten":
      precioPan = 75;
      break;
    default:
     
      return "Tipo de pan no válido";
  }
 
  let precioExtras = 0;
  if (queso) {
    precioExtras += 20;
  }
  if (tomate) {
    precioExtras += 15;
  }
  if (lechuga) {
    precioExtras += 10;
  }
  if (cebolla) {
    precioExtras += 15;
  }
  if (mayonesa) {
    precioExtras += 5;
  }
  if (mostaza) {
    precioExtras += 5;
  }
  
  let precioTotal = precioBase + precioPan + precioExtras;
  return precioTotal;
}
const prompt = require("prompt-sync")({ sigint: true });

let base = prompt("Ingrese el tipo de sandwich base: Pollo, carne o veggie: ");
let pan = prompt("Ingrese el tipo de pan: Blanco, negro, s/gluten: ");
let queso = prompt("¿Desea queso?") === 'si' ? true : false;
let tomate = prompt("¿Desea tomate?") === 'si' ? true : false;
let cebolla = prompt("¿Desea cebolla?") === 'si' ? true : false;
let mayonesa = prompt("¿Desea mayonesa?") === 'si' ? true : false;
let mostaza = prompt("¿Desea mostaza?") === 'si' ? true : false;
calcularPrecioSandwich(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);
