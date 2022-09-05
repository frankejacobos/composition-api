<template>
  <ul>
    <slot v-for="user in users" :key="user.id" :user="user">
      {{ user.first_name }} {{ user.last_name }}
      <br />
      {{ user.email }}
    </slot>
    <!-- <li v-for="user in users" :key="user.id">
      {{ user.first_name }} {{ user.last_name }}
      <br />
      {{ user.email }}
    </li> -->
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
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
