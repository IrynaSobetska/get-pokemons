const createPokemon = (pokemonData) => {
    const container = document.createElement('div');
    container.id = 'container';

    const title = document.createElement('h2');
    title.innerText = pokemonData.name;
    title.id = 'title';

    const img = document.createElement('img');
    img.src = pokemonData.sprites.front_default;
    img.id = 'img';

    const abilities = document.createElement('div');
    abilities.id = 'abilities';
    const abilTitle = document.createElement('h3');
    abilTitle.innerHTML = 'Abilities:';
    abilities.append(abilTitle);

    pokemonData.abilities.forEach((abilityName) => {
        const ability = document.createElement('p');
        ability.innerText = abilityName.ability.name;

        abilities.append(ability);
    });

    container.append(title, img, abilities);

    return container;
};

export default createPokemon;
