// const axios = require('axios');
import axios from 'axios';
import { error } from 'node:console';

export const httpClientPlugin = {
    // ---------FETCH----------

    // get: async (url) => {
    //     const resp = await fetch( url );
    //     return await resp.json();
    // },

    // ---------AXIOS---------
    // get: async ( url: string ) => {
    //     const { data } = await axios.get( url )
    //     // console.log(data);
    //     return data.name;
    // },
    get: async ( url:string ) => {
        const { data } = await axios.get( url );
        return data;
    },
    // any cualquier tipo, no usar any en la vida real
    post: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async(url: string) => {
        throw new Error('Not implemented');
    },
};


// module.exports = {
//     http: httpClientPLugin
// }