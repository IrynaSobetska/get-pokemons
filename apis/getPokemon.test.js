import getPokemon from './getPokemon.js';

describe('getPokemon', () => {
    // Setup fetch as a mock function before each test
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    // Clear all mocks after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetches a Pokemon successfully', async () => {
        const fakePokemon = {
            name: 'Pikachu',
            abilities: [{ ability: { name: 'ability1' } }],
            // Add other relevant properties
        };
        global.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => Promise.resolve(fakePokemon),
        });

        const result = await getPokemon('pikachu');
        expect(result).toEqual(fakePokemon);
    });
});
