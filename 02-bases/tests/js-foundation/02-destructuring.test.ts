
import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {
    test('characters should contain Flash, Superman', () => {
        // comprobar que se encuentren los dos strings dentro del mismo
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    })

    test('first character should be Flash, and second Superman', () => {
        const [ flash, superman ] = characters;
        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman')
    })
})