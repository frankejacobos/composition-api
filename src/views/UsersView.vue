<template>
  <h2 v-if="isLoading">Fetching users from API</h2>
  <h5 v-if="error">Error on fetching users: {{ error }}</h5>
  <template v-if="users.length > 0">
    <h2>Users</h2>
    <div>
      <ul>
        <li v-for="{ first_name, last_name, email, id } in users" :key="id">
          {{ first_name }} {{ last_name }}
          <br />
          {{ email }}
        </li>
      </ul>
    </div>
    <span>Page {{ page }} of {{ totalPages }}</span>
    <br />
    <button @click="prevPage" :disabled="page === 1">Prev</button>
    <button @click="nextPage" :disabled="page === totalPages">Next</button>
  </template>
</template>

<script>
import useUsers from "@/composables/useUsers";

export default {
  name: "UsersView",
  setup() {
    const { error, isLoading, nextPage, page, prevPage, totalPages, users } =
      useUsers();
    return { error, isLoading, nextPage, page, prevPage, totalPages, users };
  },
};
</script>

<style scoped>
h2 {
  color: red;
  text-align: center;
  width: 100%;
}

div {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
}
</style>