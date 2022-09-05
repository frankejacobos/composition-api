<template>
  <h1>This is a counter view</h1>
  <p>Current count: {{ count }}</p>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>

<script>
import useCounter from "@/composables/useCounter";

export default {
  name: "CounterView",
  props: {},
  emits: [],
  setup() {
    const { count, increment, decrement } = useCounter();
    return { count, increment, decrement };
  },
};
</script>

<style></style>
