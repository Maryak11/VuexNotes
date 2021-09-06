<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li class="navbar-item" v-for="link in links" :key="link.alias">
          <a href="" class="navbar-link">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import { links } from '@/_config.js'
export default {
  data() {
    return {
      links
    }
  }
}
</script>
