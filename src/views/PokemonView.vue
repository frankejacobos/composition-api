<template>
  <h1 v-if="!pokemon && !error">Buscando...</h1>
  <h1 v-else-if="error">Pokemon no encontrado</h1>
  <template v-else>
    <h1>{{ pokemon.name }}</h1>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <router-link :to="{ name: 'pokemon-search' }"
      >Buscar otro pokemon</router-link
    >
  </template>
</template>

<script>
import { useRoute, onBeforeRouteLeave } from "vue-router";
import usePokemon from "@/composables/usePokemon";
import { watch } from "vue";

export default {
  name: "PokemonView",
  setup() {
    const route = useRoute();
    const { pokemon, isLoading, error, searchPokemon } = usePokemon(
      route.params.id
    );
    watch(
      // watch the id param
      () => route.params.id,
      // when it changes, call the searchPokemon function
      () => searchPokemon(route.params.id)
    );
    onBeforeRouteLeave(() => {
      const answer = window.confirm("¿Estás seguro de querer salir?");
      return answer; /* false block the navigation, true allow it */
    });
    return { pokemon, isLoading, error, searchPokemon };
  },
};
</script>

<style></style>
