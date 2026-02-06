// process.argv = ['node','app.ts', '-b', '10'];
import { ServerApp } from './presentation/server-app.js';
import { jest } from '@jest/globals';

describe('Test App.ts', () => {
    test('should call Server.run with values', async() => {
      const serverRunMock = jest.fn();
      // en el test se sobreescribe el comportamiento de la dependencia de tal manera que no importa el resultado real sino se llama un resultado inventado
      ServerApp.run = serverRunMock;
      process.argv = ['node', 'app.ts', '-b', '10', '-l', '5', '-s', '-n', 'multiplication-table', '-d', 'outputs', '-e', 'txt'];

      // aca se importa el modulo principal de la app, puesto que no se puede llamar desde el test, sino desde el modulo principal, es decir,  import('./app.js'); hace referencia al modulo principal
      // antes solo se sobreescribio el comportamiento de la dependencia ServerApp.run, ahora se sobreescribe el comportamiento de la dependencia de tal manera que no importa el resultado real sino se llama un resultado inventado
      await import('./app.js');

      expect(serverRunMock).toHaveBeenCalledWith({ base: 10, limit: 5, showTable: true, fileName: 'multiplication-table', fileDestination: 'outputs', fileExtension: 'txt' });
    });
});