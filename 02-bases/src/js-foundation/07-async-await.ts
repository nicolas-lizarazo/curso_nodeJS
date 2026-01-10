// funcion async es una funcion que retorna una promesa

// const getPokemonById = async ( id ) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

//     // await codigo bloqueante hasta que no se resuleva el fetch
//     const resp = await fetch ( url );
//     const pokemon = await resp.json();

//     return pokemon.name;
// }

// module.exports = getPokemonById;

// Patron Adaptador Fetch API

import { httpClient as http } from '../plugins/index.js';
// const { http } = require('../plugins');

const getPokemonById2 = async ( id: number ):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
    const pokemon = await http.get( url );
    return pokemon.name;
}

module.exports = getPokemonById2;