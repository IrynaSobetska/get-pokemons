import dom from '../dom.js';
import pokemonHandler from '../handlers/pokemonHandler.js';

const pokemonListener = () => {
    dom.btn.addEventListener('click', pokemonHandler);
};

export default pokemonListener;
