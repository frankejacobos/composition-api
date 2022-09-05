<template>
  <div>
    <h1>Pokemon Search: {{ pokemonId }}</h1>
    <form @submit.prevent="searchPokemon">
      <input
        ref="txtSearchId"
        type="number"
        v-model="pokemonId"
        placeholder="Enter Pokemon ID"
      />
    </form>
    <br />
    <span>Press enter to search</span>
  </div>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "PokemonSearchView",
  setup() {
    const pokemonId = ref(0);
    const router = useRouter();
    const txtSearchId = ref(null);
    onActivated(() => {
      txtSearchId.value.select();
    });
    return {
      pokemonId,
      txtSearchId,
      searchPokemon() {
        router.push({
          name: "pokemon-detail",
          params: { id: pokemonId.value },
        });
      },
    };
  },
};
</script>

<style></style>
