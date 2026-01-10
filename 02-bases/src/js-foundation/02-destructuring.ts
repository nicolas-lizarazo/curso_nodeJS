// process proceso de node que corre, tiene informacion computadora, librerias, etc
// console.log( process );
// se muestra todo lo que se esta ejecutando
// proces un proceso que esta ocurriendo en una app de node
// console.log( process.env );
console.log( process.env.PORT ?? 3000 );

// Haciendo destructuracion
const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });

export const characters: string[] = ['Flash', 'Superman', 'Batman',];

// break point: pausa en la ejecucion de nuestro codigo
const [ _,__,batman ] = characters;

// const [ , ,batman] = characteres;

console.log(batman);