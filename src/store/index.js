import { createStore } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    todos: [
      { id: "1", title: "Find soul's stone", completed: false },
      { id: "2", title: "Find mind's stone", completed: true },
      { id: "3", title: "Find time's stone", completed: false },
      { id: "4", title: "Find power's stone", completed: true },
      { id: "5", title: "Find space's stone", completed: true },
      { id: "6", title: "Find reality's stone", completed: false },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
    pendingTodos: (state) => state.todos.filter((todo) => !todo.completed),
    completedTodos: (state) => state.todos.filter((todo) => todo.completed),
    byTabTodos: (_, getters) => (tab) => {
      switch (tab) {
        case "all":
          return getters.allTodos;
        case "pending":
          return getters.pendingTodos;
        case "completed":
          return getters.completedTodos;
        default:
          return getters.todos;
      }
    },
  },
  mutations: {
    toggleTodo: (state, id) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    createTodo: (state, title) => {
      if (title.length <= 1) return;
      state.todos.push({
        id: uuidv4(),
        title,
        completed: false,
      });
    },
  },
  actions: {
    toggleTodo: ({ commit }, id) => {
      commit("toggleTodo", id);
    },
    createTodo: ({ commit }, title) => {
      commit("createTodo", title);
    },
  },
  modules: {},
});
