const cardPokemons = document.querySelectorAll(".card_pokemon");
const pokemonSelecionado = document.querySelector("#pokemon_selecionado");

function selecionaPokemon(){
    const nomePokemon = this.getAttribute('data-nome');

    if(!this.classList.contains("selecionado")){
        this.classList.add("selecionado");
        pokemonSelecionado.innerHTML = `Último Pokemon selecionado foi o <b>${nomePokemon}</b>`;

    }
    else{
        this.classList.remove("selecionado");

        const pokemonsSelecionados = document.querySelectorAll(".selecionado");

        if (pokemonsSelecionados.length > 1){
            pokemonSelecionado.innerHTML = `Você desselecionaou o Pokemon ${nomePokemon}. Ainda faltam ${pokemonsSelecionados.length} Pokemons.`
        }
        else if (pokemonsSelecionados.length == 1){
            pokemonSelecionado.innerHTML = `Você desselecionaou o Pokemon ${nomePokemon}. Ainda faltam ${pokemonsSelecionados.length} Pokemon.`
        }
        else{
            pokemonSelecionado.innerHTML = "Selecione um Pokemon"
        }
    }
}

for(const cardPokemon of cardPokemons){
    cardPokemon.addEventListener("click", selecionaPokemon)
}