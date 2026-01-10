

describe('App', () => {
    test('Test in the App File', () => {

        // 1. Arrange
        const num1 = 10;
        const num2 = 25;

        // 2. Act
        const result = num1 + num2;

        // 3. Assert
        // expect(result).toBe(30);
        // if (result === 35) {

        // } else {
        //     throw new Error('The result should be 35')
        // }

        // espera que el resultado sea 35
        // to be para comparar valores primitivos numbers boolean string con el ===
        // .toEqual(objeto) compara objetos y arreglos que sean el mismo
        expect(result).toBe(35);
    });
});