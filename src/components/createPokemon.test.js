/**
 * @jest-environment jsdom
 */

import createPokemon from './createPokemon.js';

describe('createPokemon', () => {
    it('creates a Pokemon container with correct data', () => {
        const pokemonData = {
            name: 'Pikachu',
            sprites: {
                front_default: 'https://example.com/pikachu.png',
            },
            abilities: [
                { ability: { name: 'ability1' } },
                { ability: { name: 'ability2' } },
            ],
        };

        const pokemonElement = createPokemon(pokemonData);

        // Assertions
        expect(pokemonElement.classList.contains('container')).toBe(true);
        expect(pokemonElement.querySelector('img').src).toBe(
            'https://example.com/pikachu.png',
        );
        expect(pokemonElement.querySelector('h3').textContent).toBe(
            'Abilities:',
        );
        expect(pokemonElement.querySelectorAll('p').length).toBe(2);
    });
});
