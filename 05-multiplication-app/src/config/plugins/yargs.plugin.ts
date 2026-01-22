import yargs from "yargs";
import { hideBin } from "yargs/helpers";

// se retorna bin, retorna objeto o promesa de esos objetos
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        // obligar a que sea otorgado
        demandOption: true,
        describe: 'Multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication table limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination',
    })
    .option('e', {
        alias: 'extension',
        type: 'string',
        default: 'txt',
        describe: 'File extension',
    })
    .check((argv, options) => {
        if (argv.b < 1) throw 'Error: base must be greater than 0';
        // console.log({argv, options})
        return true;
    })
    .parseSync();