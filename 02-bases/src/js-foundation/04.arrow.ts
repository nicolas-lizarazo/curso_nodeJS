// callback, fununcion que se pasa como argumento

interface User {
    id: number;
    name: string;
}

const users = [
    {
        id:1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
]

export const getUserById = ( id: number, callback: (err?: string, user?: User) => void ) => {
    const user = users.find((user) => user.id === id);

    // con este operador ternario no hace falta usar return
    (user) ? callback( undefined, user ): callback(`User not found with the id ${id}`); 
}

// module.exports = {
//     getUserById,
// }