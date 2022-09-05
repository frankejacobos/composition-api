import axios from "axios";
import { ref } from "vue";

const usePokemon = (pokemonId = "1") => {
  const pokemon = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const searchPokemon = async (id) => {
    if (!id) return;
    isLoading.value = true;
    pokemon.value = null;
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      pokemon.value = data;
      error.value = null;
    } catch (err) {
      error.value = err;
      pokemon.value = null;
    }
    isLoading.value = false;
  };
  searchPokemon(pokemonId);
  return { pokemon, error, isLoading, searchPokemon };
};

export default usePokemon;
