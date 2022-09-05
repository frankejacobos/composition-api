import { ref } from "vue";

const useCounter = () => {
  const count = ref(0);
  return {
    count,
    increment: () => count.value++,
    decrement: () => count.value--,
  };
};

export default useCounter;
