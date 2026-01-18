import { SaveFile } from "./save-file-use-case.ts";
import fs from 'fs';

describe('SaveFileUseCase', () => {
 
  afterEach (() => {
    // clean up
    fs.rmSync('./test', { recursive: true });
  });
 
  test('should save file with default values    ', () => {
    const saveFile = new SaveFile();
    const options = { fileContent: 'test', fileName: 'test', fileDestination: './test', fileExtension: 'test' };
    
    const result = saveFile.execute(options); 

    const checkFile = fs.existsSync(`${options.fileDestination}/${options.fileName}.${options.fileExtension}`);
    const fileExists = fs.existsSync(`${options.fileDestination}/${options.fileName}.${options.fileExtension}`);
    const fileContent = fs.readFileSync(`${options.fileDestination}/${options.fileName}.${options.fileExtension}`, 'utf-8');
    
    expect( result ).toBe( true );
    expect( checkFile ).toBe( true );
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( options.fileContent );
  })
});