const getPokemon = async (pokemonId) => {
    try {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        );

        if (!res.ok) {
            throw new Error(
                `Failed to get pokemon with status : ${res.status}`,
            );
        }

        const pokemon = await res.json();
        return pokemon;
    } catch (err) {
        console.error('Error fetching data: ', err);
    }
};

export default getPokemon;
