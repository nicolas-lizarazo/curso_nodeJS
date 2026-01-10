// // require - funcion en la cual voy a requerir una funcion en particular
// // cada que se hace requerimiento va a ejecutar el archivo
// // cada archivo en node es un modulo y un modulo es un objeto encapsulado
// // require va a retornar lo que se tenen modulo.exports

// import { buildLogger } from "./plugins/logger.plugin.js";

// // const templateExports = require('./js-foundation/01-template.js');

// // sintaxis tradicional de importaciones de modulos en nodejs
// // const { emailTemplate } = require('./js-foundation/01-template.js');
// // require('./js-foundation/02-destructuring')

// // ----------CALLBACKS-------------

// const { getUserById } = require('./js-foundation/03-callbacks');

// // console.log(emailTemplate);

// const id = 1;

// getUserById( id, function(error, user) {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(user);

//     getUserById(2, function(error, user2) {
//         if (error) {
//             throw new Error (error);
//         }
//         console.log(user2);
//     })
// });

// // ---------ARROW FUNCTIONS--------------

// getUserById( id, (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(user);

//     getUserById(2, (error, user2) => {
//         if (error) {
//             throw new Error (error);
//         }
//         console.log(user2);
//     })
// });

// // ---------FACTORY FUNCTIONS--------

// const { getAge, getUUID } = require('./plugins');

// const { buildMakePerson } = require('./js-foundation/05-factory');

// // makePerson es una funcion
// const makePerson = buildMakePerson({ getUUID, getAge });

// // Referencia a la funcion factory y uso
// // Se esta aplicando inyeccion de independencia
// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = makePerson( obj );

// console.log({ john });

// // ----------Promises-----------
// const getPokemonById = require('./js-foundation/06-promesas');

// // getPokemonById(4, ( pokemon ) => {1
// //     console.log({ pokemon })
// // });

// getPokemonById(1)
//     // Deserializamos para que se vea como un objeto, sin los corchetes seria una simple varible con el nombre del pokemon
//     .then( ( pokemonName ) => console.log({ pokemonName }) )
//     .catch( ( err ) => console.log('Por favor intente de nuevo'))
//     .finally( () => console.log('Finalmente') );

// // --------Async y Await-------

// const getPokemonById2 = require('./js-foundation/07-async-await');

// getPokemonById2(1)
//     .then( pokemon => console.log('Pokemon funcion async await:', pokemon))
//     .catch( console.log('Por favor intente de nuevo') )
//     .finally( 'Finalmente se ejecuta el finally');

// // -----------Loger---------

// const { buildLogger } = require('./plugins');

// const logger = buildLogger('app.js');

// logger.log('Hola mundo');
// logger.error('Esto esta mal');

// // -------------Typescript-------------

// export const name: string = 'Fernando';

// const logger = buildLogger('app.js')

// logger.log(name);
// logger.error('Esto es algo malo');

// TESTING
// seccion de testing despues