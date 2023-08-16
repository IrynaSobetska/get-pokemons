import data from '../data.js';
import dom from '../dom.js';
import getPokemon from '../../apis/getPokemon.js';
import createPokemon from '../components/createPokemon.js';
import changePokemon from '../components/changePokemon.js';

const pokemonHandler = async () => {
    const id = Number(dom.input.value);

    const containerExist = document.getElementById('container');
    const errExist = document.getElementById('err');

    // check if id is already in use
    if (data.previousId === id) {
        return;
    }

    data.previousId = id;

    // check if input is correct
    if (id < 1 || Number.isNaN(id)) {
        if (containerExist) {
            containerExist.remove();
        }
        if (errExist) {
            return;
        }
        dom.input.value = '';

        const div = document.createElement('div');
        div.id = 'err';
        const text = document.createElement('p');
        text.classList = 'warning';
        text.innerText = "Pokemon id can't be text or less then 1";
        div.append(text);

        return dom.root.append(div);
    }

    // create container
    const pokemon = await getPokemon(id);
    let pokemonDom;

    if (!containerExist) {
        if (errExist) {
            errExist.remove();
        }

        pokemonDom = createPokemon(pokemon);
        dom.root.append(pokemonDom);
    } else {
        changePokemon(containerExist, pokemon);
    }

    dom.input.value = '';
};

export default pokemonHandler;
