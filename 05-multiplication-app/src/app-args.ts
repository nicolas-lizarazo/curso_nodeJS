console.log(process.argv);

// argumentos
// node dist/appendFile.js --base 10 -l=100 --file=setHeapSnapshotNearHeapLimit.txt -s

// -b 10 argumento base 10

// argument values
// process.argv: Es una propiedad incorporada en Node.js que devuelve un arreglo (array) que contiene los argumentos de la línea de comandos pasados cuando se inició el proceso.

// banderas (flags): Son argumentos específicos que suelen empezar con guiones (como -h o --version). Sirven para activar funciones, cambiar configuraciones o pasar valores específicos de forma clara.

const [tsnode, app, ...args] = process.argv;

console.log(args);

/* 
Con gusto responderé tu duda. El comando "dev": "ts-node src/app.ts" ejecuta tu programa usando ts-node que es un intérprete de TypeScript. Por otro lado, el comando "dev:nodemon": "nodemon src/app.ts" no solo ejecuta tu programa, sino que también está a la espera de cambios en el código y se recarga automáticamente gracias a nodemon, una herramienta que reinicia automáticamente la aplicación cuando detecta cambios en los archivos. Finalmente, el comando "build": "rimraf ./dist && tsc" se utiliza para generar el build de producción de tu aplicación, es decir, estos archivos son los que al final se van a utilizar en producción. Primero, rimraf ./dist borra el directorio dist existente para asegurar una compilación limpia y luego tsc, el compilador de TypeScript, compila tu proyecto colocando los archivos resultantes en el directorio dist.
*/
