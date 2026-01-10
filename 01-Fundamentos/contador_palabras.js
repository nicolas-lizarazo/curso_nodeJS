const fs = require('fs');

const content = fs.readFileSync('./README.md', 'utf8');

const words = content.split(' ');
// console.log(wordCount);

// const reactWordCount = words.filter(
//     (word) => word.toLowerCase().includes('react')
// ).length;

// Evalua expresiones regukares que busque en todas las ocurrencias y 
const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras: ', words.length);
console.log('Palabras React: ', reactWordCount); // case insensitive