import pokemonHandler from './pokemonHandler.js';

const ifEnterHandler = (e) => {
    if (e.key === 'Enter') {
        pokemonHandler();
    }
};

export default ifEnterHandler;
