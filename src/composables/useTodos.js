import { computed, ref } from "vue";
import { useStore } from "vuex";

const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");
  return {
    currentTab,
    allTodos: computed(() => store.getters["allTodos"]),
    pendingTodos: computed(() => store.getters["pendingTodos"]),
    completedTodos: computed(() => store.getters["completedTodos"]),
    byTabTodos: computed(() => store.getters["byTabTodos"](currentTab.value)),
    toggleTodo: (id) => store.dispatch("toggleTodo", id),
    createTodo: (title) => store.dispatch("createTodo", title),
  };
};

export default useTodos;
