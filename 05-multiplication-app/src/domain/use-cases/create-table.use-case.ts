// domain: donde estaran las reglas que regiran en capas exteriores

// casos-uso: hacer una tarea en particular

// objetivo crear data del archivo

/* 
    i create tableusecase

*/

export interface createTableUseCase {
    // definimos metodo de clase como funcion que retorna un string
    execute: ( options: createTableOptions ) => string;
}

export interface createTableOptions {
    base: number,
    limit?: number,
}

export class CreateTable implements createTableUseCase {
    constructor(
        /*
        * DI - Dependency Inkection
        * indicar que queremos que haga basado en dependencias internas
        * dentro de execute() se puede utilizar independencias usadas del mundo exterior
        */
    ){}

    execute({ base, limit = 10 }: createTableOptions) {
        let outputMessage: string = '';
        for ( let i = 1; i <= limit; i++ ) {
            outputMessage += `${ base } x ${ i } = ${ base * i }`
            if ( i < limit ) outputMessage += '\n';   
        }
        return outputMessage;
    }
}