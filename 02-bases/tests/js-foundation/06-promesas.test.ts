import { getPokemonById } from "../../src/js-foundation/06-promesas";

describe('js-foundation/06-promesas.ts', () => {
    // para trabajar con promesas con el callback asyncrono se puede usar el await
    test('getPokemonId should return a pokemon', async() => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById( pokemonId );
        console.log(pokemonName)

        expect(pokemonName).toBe('bulbasaur');
    })

    test('should return an erroor if pokemon does not exist', async() => {
        const pokemonId = 10000000;

        // verificar que el error sea el mismo lanzado
        try {
            await getPokemonById(pokemonId);
            // no deberia pasar que el usuario no reciba error
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
        }
    })
}) 