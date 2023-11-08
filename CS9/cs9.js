//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];
// podes continuar tu codigo a partir de aca!

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    const clienteEncontrado = this.clientes.find(
      (cliente) => cliente.titularCuenta === titular
    );
    if (clienteEncontrado) {
      return clienteEncontrado;
    } else {
      return "Cliente no encontrado";
    }
  },
  deposito: function (titular, cantidad) {
    const cliente = this.consultarCliente(titular);
    if (cliente === "Cliente no encontrado") {
      console.log("Cliente no encontrado");
    } else {
      cliente.saldoEnPesos += cantidad;
      console.log(
        `Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`
      );
    }
  },
  extraccion: function (titular, monto) {
    const cliente = this.consultarCliente(titular);
    if (cliente === "Cliente no encontrado") {
      console.log("Cliente no encontrado");
    } else {
      if (cliente.saldoEnPesos - monto < 0) {
        console.log("Fondos insuficientes");
      } else {
        cliente.saldoEnPesos -= monto;
        console.log(
          `Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`
        );
      }
    }
  },
};
//probando
console.log(banco); //si
let clienteEncontrado = banco.consultarCliente("Ramon Connell"); //si
console.log(clienteEncontrado); //si
banco.deposito("Ramon Connell", 1000); //si
banco.extraccion("Ramon Connell", 5000); //si

//bonus extra
function propiedadUnica(arr, propiedad) {
  let nuevoArray = [];
  for (let i = 0; i < arr.length; i++) {
    const nuevoObj = {};
    nuevoObj[propiedad] = arr[i][propiedad];
    nuevoArray.push(nuevoObj);
  }
  return nuevoArray;
}

// probando
let array = [
  { nombre: "Sara", edad: 27 },
  { nombre: "Laura", edad: 49 },
];

const resultadoEdad = propiedadUnica(array, "edad");
const resultadoNombre = propiedadUnica(array, "nombre");

console.log(resultadoEdad);
console.log(resultadoNombre);

let alumno = {
  nombre: "",
  numeroLegajo: "",
  notas: [],
  notaAprobacion: 7,
  agregarNota: function (nota) {
    this.notas.push(nota);
  },
  calcularPromedio: function () {
    if (this.notas.length === 0) {
      return 0;
    }

    const sumaNotas = this.notas.reduce(
      (acumulador, nota) => acumulador + nota,
      0
    );
    return sumaNotas / this.notas.length;
  },
  estaAprobado: function () {
    return this.calcularPromedio() >= this.notaAprobacion;
  },
};

//  probando
alumno.nombre = "Carlitos";
alumno.numeroLegajo = "12345";
alumno.agregarNota(7);
alumno.agregarNota(5);
alumno.agregarNota(8);
console.log(`Nombre: ${alumno.nombre}`);
console.log(`Número de Legajo: ${alumno.numeroLegajo}`);
console.log(`Notas: ${alumno.notas}`);
console.log(`Promedio: ${alumno.calcularPromedio()}`);
console.log(`Aprobado: ${alumno.estaAprobado() ? "Sí" : "No"}`);
