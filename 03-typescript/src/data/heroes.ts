// carpeta dist basicamente se guarda aca la app

// dist carpeta de distribucion
// start levanta el proyecto

// forma de trabajar con typescript moderno

export interface Hero {
    id: number;
    name: string;
    owner: string;
}

// Para que export funcione el proyecto debe estar marcado como type: modules, no commonJS
// se definen variables antes con interface para el objeto
export const heroes:Hero[] = [
    {
        id: 1,
        name: 'Iron man',
        owner: 'Marvel',
    }, 
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
    }, 
    {
        id: 3,
        name: 'Batman',
        owner: 'DC',
    },
]