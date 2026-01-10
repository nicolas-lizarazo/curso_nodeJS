import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin.js';

// console.log(yarg);

// grabar en el archivo de salida 
// path: outputs/tabla-5.txt

// const multiply = () => {
//     const base = yarg.b;
//     const array: number[] = [1,2,3,4,5,6,7,8,9];
//     let chain: string = `---------------------------\n      tabla del ${yarg.b}       \n---------------------------\n\n`;
//     array.forEach(number => {
//         chain += `${base} x ${number} = ${number * base}\n`;
//     });
//     createFolder();
//     console.log(chain);
//     fs.writeFileSync('outputs/tabla-5.txt', chain);
// } 

// const createFolder = () => {
//     console.log(!fs.existsSync( 'outputs'))
//     if ( !fs.existsSync( 'outputs' ) ) {
//         fs.mkdirSync( 'outputs' );
//     }
// }

// multiply();


let outputMessage = '';
// renombrar variables en desustructuracion de js
const { b:base, l:limit, s:displayTable } = yarg;
const headerMessage = `
==============================
        Tabla del ${base}
==============================
`;

for ( let i = 1; i <= limit; i++ ) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`
}

const outputPath = `outputs/folder1/folder2`;

outputMessage = headerMessage + outputMessage;
if ( displayTable ) console.log(outputMessage);

// Por estar recursivamente, se pueden crear una serie de carpetas de esta manera
fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`outputs/tabla-${ base }.txt`, outputMessage);
