// import { yarg } from "./yargs.plugin.js";

import { jest } from "@jest/globals";

const originalAvg = process.argv;

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.plugin");

  return yarg;
};

describe("Test args.plugin.ts", () => {
  beforeEach(() => {
    // el process.argv mantiene las modificaciones en secuencia, por tanto es importante restablecer lo modificado cada que cambia de prueba
    process.argv = originalAvg;
    jest.resetModules(); // Limpia el caché de importaciones
  });

  test("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    // console.log(yarg);

    // console.log(process.env);
    expect(argv).toEqual( expect.objectContaining({
      b: 5,
      d: "outputs",
      e: "txt",
      l: 10,
      n: "multiplication-table",
      s: false,
    }));
  });

  test('should return configuration with custom values', async() => {

    const argv = await runCommand([ '-b', '8', '-l', '20', '-s', '-n', "name-table", '-d', "outputs/output/folder6", '-e', "txt" ])

    expect(argv).toEqual( expect.objectContaining ({
        b: 8,
        d: 'outputs/output/folder6',
        e: "txt",
        l: 20,
        n: 'name-table',
        s: true,
    }));
  });
});
