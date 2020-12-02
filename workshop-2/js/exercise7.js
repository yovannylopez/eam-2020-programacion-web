let number = parseInt(prompt('Ingrese el número'));

for (let index = 0; index < number; index++) {
  document.write(`${index} <br>`);
}

// primera ejecución del ciclo
// number = 2
// index = 0; true; index = 1
// salida: 0
// incremento o paso: 1

// segunda ejecución del ciclo
// number = 2
// index = 1; true; index = 2
// salida: 1
// incremento o paso: 2

// tercera ejecución del ciclo
// number = 2
// index = 2; false;
// se finaliza el ciclo