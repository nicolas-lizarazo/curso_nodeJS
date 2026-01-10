// Promesas - 

import { asyncWrapProviders } from 'node:async_hooks';
import { httpClientPlugin as http } from '../plugins/http-client.plugin.js'

// con callback
// const getPokemonById = ( id, callback ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`
//     fetch( url )
//         .then( ( response ) => response.json())
//         .then( ( pokemon ) => {
//             callback( pokemon.name );
//     })
// }

// string o number

// tipado de retorno, se indica que se espera que al final de la ejecucion se devuelva una promesa que retorna un string
export const getPokemonById = async ( id: string|number ):Promise<string>  => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    
        const pokemon = await http.get( url );
        return pokemon.name;
    } catch {
        throw `Pokemon not found with id ${id}`
    }
    // const pokemon = await http.get( url );

    // return pokemon;
    // return fetch( url )
    //     .then( ( response ) => response.json())
    //     .then( (pokemon )  => pokemon.name)
}

// module.exports = getPokemonById;

// Async y await

// funcion async es una funcion que retorna una promesa

// const getPokemonById = async ( id ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

//     // await codigo bloqueante hasta que no se resuleva el fetch
//     const resp = await fetch ( url );
//     const pokemon = await resp.json();

//     return pokemon.name;
// }

// module.exports = getPokemonById;