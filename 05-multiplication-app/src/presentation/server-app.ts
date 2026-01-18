import { CreateTable } from "../domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../domain/use-cases/save-file-use-case.js";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
    fileExtension: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileName, fileDestination, fileExtension }:RunOptions) {
        console.log('Server running...');
        
        // aca se hace inyeccion de dependencias
        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({ fileContent: table, fileName, fileDestination, fileExtension })

        if ( showTable ) console.log(table);

        ( wasCreated )
            ? console.log('File created!')
            : console.error('File not created!');
    }
}