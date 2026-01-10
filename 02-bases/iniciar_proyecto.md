# Iniciar proyecto (Crear package.json -> una aplicacion de node)
- npm init

package name(enter)

version -> (1.0.0) o 0.0.1

descripcion -> esta es mi primera aplicacion de node (Lo que se quiera poner)

entry point: (index.js) app.js (Se puede poner lo que se quiera, es volatil se puede cambiar)

test command:

git repository: 

keywords: (Palabras s especificar)

author: "Nicolas Lizarazo"
license: "ISC"

## Iniciar app.js o index.js

en package json agregar "start"

```
{
  "name": "02-bases",
  "version": "0.0.1",
  "description": "Esta es mi primera aplicacion real de node",
  "license": "ISC",
  "author": "\"Nicolas Lizarazo\"",
  "type": "commonjs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js"
  }
}
```

## iniciar con -> npm start
start el que levanta aplicacion en produccion

## iniciar dev -> npm run dev
puede ser dev o start:dev o start:stag
```
"start:dev": "echo 'Hola mundo desde dev'"
```
Asi queda json
```
{
  "name": "02-bases",
  "version": "0.0.1",
  "description": "Esta es mi primera aplicacion real de node",
  "license": "ISC",
  "author": "\"Nicolas Lizarazo\"",
  "type": "commonjs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js",
    "start:dev": "echo 'Hola mundo desde dev'"
  }
}
```

# nodemon
se puede instalar de forma global en el equipo 

```En consola
npm install -D nodemon
```
D para que sea de desarrollo y no de produccion
El - indica que debe ser con permisos de administrador
```
"devDependencies": {
    "nodemon": "^3.1.11"
  }
```
Los de dev nunca van a llegar a produccion

```
{
  "name": "02-bases",
  "version": "0.0.1",
  "description": "Esta es mi primera aplicacion real de node",
  "license": "ISC",
  "author": "\"Nicolas Lizarazo\"",
  "type": "commonjs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "start:dev": "echo 'Hola mundo desde dev'"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

npm install o npm i - inicia todas las dependencias de node al abrir un proyecto externo, puesto que a las dependencias de node no se les da seguimiento