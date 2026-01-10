// callback, fununcion que se pasa como argumento

interface User {
    id: number;
    name: string;
}

const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
]

// se indica que es una funcion donde el error es opcional y el usuario es opcional
export function getUserById( id: number, callback: (err?: string, user?: User) => void ) {
    const user = users.find( function(user) {
        return user.id === id;
    });

    if ( !user ) {
        setTimeout(() => {
            callback(`User not found with the id ${id}`)
        // }, 2500)
        }, 0)
        return;
        // return callback(`User not found with the id ${id}`);
    }
    return callback( undefined, user );
}

// module.exports = {
//     getUserById,
// }