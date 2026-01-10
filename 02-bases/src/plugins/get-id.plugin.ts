// getUUID(); is a function that returns a UUID

// v4 es el nombre original de la funcion dentro de su libreria, nombre en este archivo es uuidv4

// const { v4: uuidv4 } = require('uuid');

import { v4 as uuidv4 } from 'uuid';

const getUUID = () => {
    return uuidv4()
}

// module.exports = {
export {
    getUUID,
}