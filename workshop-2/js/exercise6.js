let option = prompt('Ingrese la opción deseada, 1:web, 2:móvil, 3:escritorio');

switch (option) {
  case '1':
    alert('java, javascript, php, python, ruby');
    break;
  case '2':
    alert('java, javascript, c#, swift, objetive-c, dart');
    break;
  case '3':
    alert('java, javascript, c#, python');
    break;
  default:
    alert('opción incorrecta, debe ser 1, 2 o 3');
    break;
}

if (option == '1') {
  alert('java, javascript, php, python, ruby');
} else if (option == '2') {
  alert('java, javascript, c#, swift, objetive-c, dart');
} else if (option == '3') {
  alert('java, javascript, c#, python');
} else {
  alert('opción incorrecta, debe ser 1, 2 o 3');
}