<template>
  <h1>Thanos' To Do List</h1>
  <h4>total tasks: {{ allTodos.length }}</h4>
  <h4>pending tasks: {{ pendingTodos.length }}</h4>
  <h4>completed tasks: {{ completedTodos.length }}</h4>
  <hr />
  <button :class="{ active: currentTab === 'all' }" @click="currentTab = 'all'">
    allTodos
  </button>
  <button
    :class="{ active: currentTab === 'pending' }"
    @click="currentTab = 'pending'"
  >
    pendingTodos
  </button>
  <button
    :class="{ active: currentTab === 'completed' }"
    @click="currentTab = 'completed'"
  >
    completedTodos
  </button>
  <div>
    <ul>
      <li
        v-for="todo in byTabTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="toggleTodo(todo.id)"
      >
        {{ todo.title }}
      </li>
    </ul>
  </div>
  <hr />
  <button @click="showModal = true">add new task</button>
  <modal v-if="showModal" @on:close="showModal = false">
    <!-- Slots must be named like this:
    v-slot:header, v-slot:body, v-slot:footer -->
    <template v-slot:header>
      <h2>add todo</h2>
    </template>
    <template v-slot:body>
      <form
        @submit.prevent="
          createTodo(newTodoTitle);
          showModal = false;
        "
      >
        <input type="text" placeholder="title" v-model="newTodoTitle" />
        <br />
        <button type="submit">add</button>
      </form>
    </template>
    <template v-slot:footer> </template>
  </modal>
</template>

<script>
import { ref } from "vue";
import useTodos from "@/composables/useTodos";
import Modal from "@/components/Modal.vue";

export default {
  name: "TodoView",
  components: { Modal },
  setup() {
    const {
      allTodos,
      byTabTodos,
      completedTodos,
      createTodo,
      currentTab,
      pendingTodos,
      toggleTodo,
    } = useTodos();
    return {
      allTodos,
      byTabTodos,
      completedTodos,
      createTodo,
      currentTab,
      pendingTodos,
      toggleTodo,
      showModal: ref(false),
      newTodoTitle: ref(""),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  /* list-style: none; */
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: #fff;
}
.completed {
  text-decoration: line-through;
}
</style>