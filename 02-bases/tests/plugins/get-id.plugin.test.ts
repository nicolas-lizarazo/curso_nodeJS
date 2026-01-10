import { getUUID } from "../../src/plugins/get-id.plugin.js";
// import { jest } from '@jest/globals';

describe('plugins/get-id.plugin.tss', () => {
    test('getUUID>() should return a UUID', () => {
        const uuid = getUUID();

        expect( typeof uuid ).toBe('string');
        expect( uuid.length ).toBe(36);
    })
})