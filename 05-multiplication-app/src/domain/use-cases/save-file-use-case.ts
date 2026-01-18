import fs from 'fs';

// caso de uso - objetivo de hacer solo una tarea a la vez
export interface SaveFileUseCase {
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination: string;
    fileName?: string;
    fileExtension?: string;
}
                
export class SaveFile implements SaveFileUseCase {
    constructor(
        // * repository: StorageRepository
    ){}

    execute( { 
        fileContent, 
        fileName,
        fileDestination,
        fileExtension, 
    }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, {recursive: true})
            fs.writeFileSync(`${fileDestination}/${fileName}.${fileExtension}`, fileContent);
            console.log('File created!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
}