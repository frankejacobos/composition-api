import { ref } from "vue";
import axios from "axios";

const useUsers = () => {
  const users = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  const page = ref(1);
  const totalPages = ref(null);
  const fetchUsers = async () => {
    isLoading.value = true;
    try {
      const { data } = await axios.get("https://reqres.in/api/users", {
        params: { page: page.value },
      });
      if (data) {
        users.value = data.data;
        page.value = data.page;
        totalPages.value = data.total_pages;
      }
      isLoading.value = false;
    } catch (err) {
      error.value = err.message;
    }
  };
  fetchUsers();
  return {
    error,
    isLoading,
    page,
    totalPages,
    users,
    nextPage: () => {
      page.value++;
      fetchUsers();
    },
    prevPage: () => {
      page.value--;
      fetchUsers();
    },
  };
};

export default useUsers;
