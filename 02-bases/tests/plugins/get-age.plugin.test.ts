import { getAge } from "../../src/plugins/get-age.plugin.js";
import { jest } from '@jest/globals';

describe('plugins/get-age.plugin.ts', () => {
    test('getAge() should return the age of a person', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect( typeof age ).toBe('number');
    });

    test('getAge should return current age', () => {
        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculatedAge = ( birthdate: string ) => {
            if ( !birthdate ) throw new Error('birthdate is required');

            const birthDate = new Date(birthdate);
            const today = new Date();
            
            let age = today.getFullYear() - birthDate.getFullYear();
            const month = today.getMonth() - birthDate.getMonth();

            if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }

        expect( age ).toBe( calculatedAge(birthdate) );
    })

    test('getAge should return 0 years', () => {
        // 1. Mockeamos el año a 1995
        const spyYear = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
        
        // 2. Mockeamos el mes y día a algo posterior al nacimiento (ej. Diciembre)
        // para que la lógica de "month < 0" no reste un año.
        const spyMonth = jest.spyOn(Date.prototype, 'getMonth').mockReturnValue(11); // 11 es Diciembre
        const spyDate = jest.spyOn(Date.prototype, 'getDate').mockReturnValue(31);

        const birthdate = '1995-10-21';
        const age = getAge(birthdate);  
        
        // Ahora: 1995 - 1995 = 0. Y como hoy es 31 de Dic, no se resta nada.
        expect(age).toBe(0);
        expect(spyYear).toHaveBeenCalled();

        // 3. LIMPIEZA (Fundamental para no romper otros tests)
        spyYear.mockRestore();
        spyMonth.mockRestore();
        spyDate.mockRestore();
        })
});