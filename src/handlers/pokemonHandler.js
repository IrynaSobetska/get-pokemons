import dom from '../dom.js';
import getPokemon from '../../apis/getPokemon.js';
import createPokemon from '../components/createPokemon.js';

const pokemonHandler = async () => {
    const input = dom.input.value;
    dom.root.innerHTML = '';

    const ids = input
        .split(',')
        .map((id) => parseInt(id.trim()))
        .filter((id) => !isNaN(id));

    // check if input is correct
    if (ids.length === 0) {
        dom.input.value = '';

        const div = document.createElement('div');
        div.id = 'err';
        const text = document.createElement('p');
        text.classList = 'warning';
        text.innerText = 'Please enter id separated by ","';
        div.append(text);

        return dom.root.append(div);
    } else if (ids < 1) {
        dom.input.value = '';

        const div = document.createElement('div');
        div.id = 'err';
        const text = document.createElement('p');
        text.classList = 'warning';
        text.innerText = "Pokemon id isn't valid";
        div.append(text);

        return dom.root.append(div);
    }

    // create container
    const pokemonPromises = ids.map((id) => getPokemon(id));
    const pokemon = await Promise.all(pokemonPromises);

    pokemon.forEach((pokemonData) => {
        const pokemonDom = createPokemon(pokemonData);
        dom.root.append(pokemonDom);
    });

    dom.input.value = '';
};

export default pokemonHandler;
