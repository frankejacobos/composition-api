<template>
  <h1>Learning slots</h1>
  <button @click="openModal">Open Modal</button>
  <!-- Customizable modal -->
  <modal v-if="isOpen" title="Modal Title" @on:close="closeModal">
    <!-- Customizable header -->
    <template v-slot:header>
      <h1>Custom Header</h1>
    </template>
    <!-- Customizable body -->
    <template v-slot:body>
      <p>Custom Body</p>
    </template>
    <!-- Customizable footer -->
    <template v-slot:footer>
      <button @click="closeModal">Close Modal</button>
    </template>
    <!-- Scoped slot -->
    <template v-slot:scoped="{ prop1, prop2 }">
      <p>Prop1: {{ prop1 }}</p>
      <p>Prop2: {{ prop2 }}</p>
    </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal.vue";

export default {
  name: "CustomSlotsView",
  components: { Modal },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

<style></style>
