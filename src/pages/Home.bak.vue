<template>
  <br />
  <br />
  <div v-if="isUserLogged">user is logged {{ user }}</div>
  <div v-else>
    <button @click="handleLoginClick" class="btn btnPrimary">Login</button>
  </div>
  <br />
  <br />
  <ul>
    <li v-for="user in getUsers" :key="user.id">
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.admin ? 'Это админ' : 'Нет' }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    handleLoginClick() {
      this.$store.dispatch('setUser', ['123'])
    }
  },
  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLogged
    },
    getUsers() {
      return this.$store.getters.getUsers
    },
    user() {
      return this.$store.getters.getUser
    }
  }
}
</script>
