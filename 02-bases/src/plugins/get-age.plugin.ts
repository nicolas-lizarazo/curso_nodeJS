// Se esta utilizando patron adaptador

// get age es viejo y esta desactualizado, usa common js
// import getAgePlugin from '../utils/getAge.js';
// const getAgePlugin = require('get-age');

// export const getAge = ( birthdate: string ): number => {
//     if ( !birthdate ) throw new Error('birthdate is required');

//     const birthDate = new Date(birthdate);
//     const today = new Date();
    
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const month = today.getMonth() - birthDate.getMonth();

//     if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     return age;
// }

export const getAge = ( birthdate: string ): number => {
    if ( !birthdate ) throw new Error('birthdate is required');

    const birthDate = new Date(birthdate);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// export {
//     getAge,
// }

// module.exports = {
//     getAge,
// }