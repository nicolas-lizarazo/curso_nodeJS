import { SaveFile } from "./save-file-use-case.ts";
import fs from 'fs';
// import { jest } from '@jest/globals'; para usar jest en typescript
// sucede error porque no reconoce jest en typescript
import  { jest }from '@jest/globals';

describe('SaveFileUseCase', () => {

    const customOptions = {
      fileContent: 'custom content',
      fileDestination: 'custom-outputs/file-destination',
      fileName: 'custom-table-name',
      fileExtension: 'txt'
    }

  beforeEach (() => {
    // * limpiar los mocks para que no funcionen en segundo plano
    // ! no funciona para mock implementation
    jest.clearAllMocks();
  });
 
  afterEach (() => {
    // clean up
    const outputFolderExists = fs.existsSync('./test');
    if ( outputFolderExists )  fs.rmSync('./test', { recursive: true });
    console.log('file deleted');

    const customOutputFolderExists = fs.existsSync('./custom-outputs');
    if ( customOutputFolderExists )  fs.rmSync('./custom-outputs', { recursive: true });
    console.log('custom file deleted');
  });
 
  test('should save file with default values    ', () => {
    const saveFile = new SaveFile();
    const options = { fileContent: 'test' };
    const fileDestination = 'outputs/table';
    const fileName = 'multiplication_table';
    const fileExtension = 'txt';
    
    const result = saveFile.execute(options); 

    const filePath = `${fileDestination}/${fileName}.${fileExtension}`;

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect( result ).toBeTruthy();
    expect( fileExists ).toBe(true);
    expect( fileContent ).toBe( options.fileContent );
  })

  test('should save file with custom values', () => {
    const saveFile = new SaveFile();

    const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.${customOptions.fileExtension}`;

    const result = saveFile.execute(customOptions); 

    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    expect( result ).toBeTruthy();
    expect( fileExists ).toBe(true);
    expect( fileContent ).toBe( customOptions.fileContent );
  })

  test('should return false if directory could not be created', () => {
    const saveFile = new SaveFile();
    // se espiara funcion mkdirsync de fs y con mock implementation se sobreescribira por implementacion propia
    // este spy periste sobre siguiente prueba
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing'); }
    );
    const result = saveFile.execute(customOptions);

    expect( result ).toBe( false );

    // cuando se tiene un mock inplementation se debe implementar manualmente
    // mock restore hace lo de mock reset y restablece la funcion original
    mkdirSpy.mockRestore();
  })

  test('should return false if could not create file', () => {
    const saveFile = new SaveFile();
    // se espiara funcion mkdirsync de fs y con mock implementation se sobreescribira por implementacion propia

    // se esta implementando que la funcion write file sync haga un retorno de un error o una excepcion
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
    () => { throw new Error('This is a custom writing error message'); }
    );
    const result = saveFile.execute({ fileContent: 'Hola', fileDestination: 'custom-outputs/file-destination' });

    expect( result ).toBe( false );

    writeFileSpy.mockRestore();
  })
});