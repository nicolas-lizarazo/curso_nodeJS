// factory - funcion que crea otra funcion

// uuid sirve para crear ids unicos complejos que sean dificiles de adivinar y evitar conflictos
// getAge es una libreria que calcula la edad de una persona dada una fecha de nacimiento

// aca es una funion original que regresa un objeto

//cuando en ruta no se pone nombre de archivo es como si buscara el index.js
// const { getAge, getUUID } = require('../plugins')

// import { v4 as uuidv4 } from 'uuid';

// patron adapter funciona adaptando una dependencia de terceros para que el codigo no dependa de la dependencia de terceros

// Esto trata de una inyeccion de dependencias usando una Factory Function
// IMPORTANTE: js para desestructurar los objetos, estos deben ser igual en nombre en parametros y argumentos, porque los busca por nombre, no por posicion 

// en este caso esto mermite mandar mis dependencias como argumentos

// es como si se dijera, no me importa que libreria uses, solo asegurate de pasarme una funcion que me de un texto y otra que me de un numero
// de esta manera se aprovecha el desacoplamiento
interface BuildMakerOptions {
    getUUID: () => string;
    getAge: (birthdate:string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

// aca se realiza un tipado de parametro, se indica que deve ser las varibles y en este caso por ser objetos se realiza automaticamente
export const buildMakePerson = ({ getUUID, getAge }: BuildMakerOptions ) => {
    return ({ name, birthdate }: PersonOptions ) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }    
    }
}

// const buildPerson = ({name, birthdate}) => {
//     return {
//         id: getUUID(),
//         name: name,
//         birthdate: birthdate,
//         age: getAge(birthdate),
//     } 
// }

// const obj = { name: 'Jhon', birthdate: '1985-10-21' };

// const john = buildPerson(obj);

// console.log(john);

// module.exports = {
//     buildMakePerson,
// }