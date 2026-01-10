// paquetes precargados como file system 

const fs = require('fs');

// Si no se especifica el utf probablemente regrese el archivo binario
const data = fs.readFileSync('README.md', 'utf8');

// Toda informacion de readme pero donde decia react ahora va a decir angular
const newData = data.replace(/REACT/ig, 'Angular');

// Imprimir readme en consola
// console.log(data);

// Escribir archivo
fs.writeFileSync('README-Angular.md', newData);