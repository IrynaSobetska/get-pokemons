const changePokemon = (pokemonDom, pokemonData) => {
    pokemonDom.querySelector('h2').innerText = pokemonData.name;

    pokemonDom.querySelector('img').src = pokemonData.sprites.front_default;

    const abilities = pokemonDom.querySelector('div');
    abilities.innerHTML = '';
    const abilTitle = document.createElement('h3');
    abilTitle.innerHTML = 'Abilities:';
    abilities.append(abilTitle);

    pokemonData.abilities.forEach((abilityName) => {
        const ability = document.createElement('p');
        ability.innerText = abilityName.ability.name;

        abilities.append(ability);
    });
};

export default changePokemon;
