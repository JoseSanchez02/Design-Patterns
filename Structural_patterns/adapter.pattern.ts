function main() {
    //const pokemon = {weight: 100, height: 200};
    //weight is in pounds and we needed on kg, and height is in cm and we needed in meters
    //const weight = pokemon.weight * 0.453592;
    //const height = pokemon.height * 100;
    const pokemonOnFormated = { weight: 100, height: 200 };
    const adapter = new PokemonAdapter();
    const pokemon = adapter.getPokemonForMexico(pokemonOnFormated);
}



interface Pokemon {
    weight: number;
    height: number;
}

class PokemonAdapter {
    pokemon: Pokemon;
    getPokemonForMexico(pokemon: any) : Pokemon {
        if(pokemon.weight) {
            this.pokemon.weight = pokemon.weight * 0.453592;
        }

        if(pokemon.height) {
            this.pokemon.height = pokemon.height * 100;
        }

        return pokemon;
    }
}