//si language = javascript entonces imprimir 'lenguaje del lado del servidor y del cliente'
//sino imprimir 'es otro lenguaje'

/* ------ Solución con sentencias if ----- */

let language = 'javascript';

if (language == 'javascript') {
  alert('lenguaje del lado del servidor y del cliente');
} else {
  alert('es otro lenguaje');
}

/* ------ Solución con operador ternario ----- */
// variable, comparación ? salida en true : salida en false
let correctMessage = 'lenguaje del lado del servidor y del cliente';

language == 'javascript' ? alert(correctMessage) : alert('es otro lenguaje');

/* ------ Solución con sentencia switch case ----- */

switch (language) {
  case 'javascript':
    alert('lenguaje del lado del servidor y del cliente');
    break;
  default:
    alert('es otro lenguaje');
    break;
}