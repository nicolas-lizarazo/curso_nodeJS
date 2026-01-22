import { CreateTable } from "../domain/use-cases/create-table.use-case.js";
import { SaveFile } from "../domain/use-cases/save-file-use-case.js";
import { ServerApp } from "./server-app.js";
import { jest } from '@jest/globals';


describe('Server App', () => {
  
  const options = {
    base: 2,
    limit: 10,
    showTable: false,
    fileName: 'test-filename',
    fileDestination: 'test-destination',
    fileExtension: 'txt'
  }
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // afterEach(() => {
  //   jest.resetAllMocks();
  // });

  test('should create ServerApp instance', () => {
    const serverApp = new ServerApp();
    expect( serverApp ).toBeInstanceOf(ServerApp);
    expect( typeof ServerApp.run ).toBe('function');
  });

  // test('should run ServerApp without default options', () => {

    // const logSpy = jest.spyOn(console, 'log');
    // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
    // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');
    

    // ServerApp.run(options);

    // expect( options.base ).toBe(2);
    // expect( options.limit ).toBe(10);
    // expect( options.showTable ).toBe(false);
    // expect( options.fileName ).toBe('test-filename');
    // expect( options.fileDestination ).toBe('test-destination');
    // expect( options.fileExtension ).toBe('txt');

    // // dos veces por la creacion de la tabla y el log de la creacion del archivo, ahora tambien cuenta la creacion de la tabla y guardar archivo
    // expect( logSpy).toHaveBeenCalledTimes(2);
    // expect( logSpy ).toHaveBeenCalledWith('Server running...');
    // expect( logSpy ).toHaveBeenCalledWith( 'File created!');

    // expect( createTableSpy ).toHaveBeenCalledTimes(1);
    // expect( createTableSpy ).toHaveBeenCalledWith({ base: options.base, limit: options.limit });

    // expect( saveFileSpy ).toHaveBeenCalledTimes(1);
    // expect( saveFileSpy ).toHaveBeenCalledWith({ fileContent: expect.any(String), fileName: options.fileName, fileDestination: options.fileDestination, fileExtension: options.fileExtension });

  test('should run with custom values mocks', () => {
   
    // aca se realiza Mocking(simulacion). El objetivo es aislar la clase para realizar pruebas unitarias.

    // se crea una funcion espia, espera a ver quien lo llama, se puede preguntar despues si llamaron la funcion, cuantas veces y con que argumentos
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const createMock = jest.fn();
    const saveFileMock = jest.fn();

    // sobrescribiendo el sistema con Golbal Mocks. Se toma el console.log original de nodejs y se remplaza por una funcion espia, con esto se evita que cuando el codigo corra no salga basura en el terminal, tambien se puede saber cuantos logs hace el sistema sin que se mezclen
    global.console.log = logMock; 
    global.console.error = logErrorMock;
    // Inyeccion de comportamiento. Se sobreescribe el comportamiento de la dependencia, de tal manera que no importa el resultado real sino se llama un resultado inventado, sirve para mayour velocidad y control para ver que pasa en ciertos casos de pruebas. Ahora si falla mañana saveFile por ejemplo, este codigo seguira funcionando, sirve para evitar errores y hacer pruebas unitarias
    (CreateTable.prototype.execute as jest.Mock) = createMock.mockReturnValue('2 x 1 = 2');
    (SaveFile.prototype.execute as jest.Mock) = saveFileMock.mockReturnValue(true);
    // CreateTable.prototype.execute = createMock.mockReturnValue( '2 x 1 = 2' );
    // SaveFile.prototype.execute = saveFileMock.mockReturnValue(true);

    ServerApp.run( options );

    expect( logMock ).toHaveBeenCalledWith('Server running...');
    expect( createMock ).toHaveBeenCalledWith( {"base": options.base, "limit": options.limit} );
    expect( saveFileMock ).toHaveBeenCalledWith({
      fileContent: '2 x 1 = 2',
      fileName: options.fileName,
      fileDestination: options.fileDestination,
      fileExtension: options.fileExtension
    });
    expect( logMock ).toHaveBeenCalledWith('File created!');
    expect( logErrorMock ).not.toHaveBeenCalled();

  })

});