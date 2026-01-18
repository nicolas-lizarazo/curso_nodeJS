import { CreateTable } from "./create-table.use-case.js";

describe('CreateTableUseCase', () => {
  test('should create table with default values', () => {
    const createTable = new CreateTable();

    const table = createTable.execute({ base: 2 });
    const rows = table.split('\n');

    console.log(table);

    expect( createTable ).toBeInstanceOf( CreateTable );
    expect( table ).toBe( '2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20' );    
    expect( rows ).toHaveLength( 10 );
  });

  test('should create table with custom values', () => {
    const options = { 
      base: 3,
      limit: 20 
    };
    const createTable = new CreateTable();

    const table = createTable.execute(options);
    const rows = table.split('\n');

    expect( createTable ).toBeInstanceOf( CreateTable );
    expect( table ).toContain( '3 x 1 = 3' );
    expect( rows ).toHaveLength( 20 );
  })


});