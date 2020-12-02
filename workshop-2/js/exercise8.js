document.write('************ For **************' + '<br>');
let languages = ['java', 'javascript', 'php', 'python', 'ruby'];

for (let index = 0; index < languages.length; index++) {
  document.writeln(languages[index] + '<br>');
}

document.write('************ forEach with function **************' + '<br>');

languages.forEach(function(index) {
  document.writeln(index + '<br>');
});

document.write('************ forEach with arrow function **************' + '<br>');

// ECMASCRIPT - arrow functions
languages.forEach((index) => {
  document.writeln(index + '<br>');
});

document.write('************ forEach with return inline **************' + '<br>');

// ECMASCRIPT - arrow functions
languages.forEach((index) => document.writeln(index + '<br>'));

document.write('************ map **************' + '<br>');

// ECMASCRIPT - arrow functions
languages.map((index) => document.writeln(index + '<br>'));