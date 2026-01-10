// apegarse a nombre archivo pero antes de la extencion agregar .test

import { emailTemplate } from '../../src/js-foundation/01-template.js';

describe('js-foundation/01-template.ts', () => {
    test('emailTemplate should contain a greeting', () => {
        // to contain, jest dice debe contener un Hi, 
        // deveria ser toMatch, toContain es mas para arreglos y objetos
        expect( emailTemplate ).toContain('Hi, ')
    });

    test('emailTemplate should contain {{name}} and {{orderId}}', () => {
        // to contain, jest dice debe contener un Hi, 
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    })
})