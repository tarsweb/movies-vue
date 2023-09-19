<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
  { href: '/about', text: 'About' }
]
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav class="navlist">
        <RouterLink v-for="item in navItems" :to="item.href">{{ item.text }}</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.router-link-active {
  text-decoration-line: underline;
}
header{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    position: sticky;
    z-index: 1100;
    top: 8px;
    left: 0;
}
.wrapper{
  width: 100%;
  display: flex;
  gap: 10px;
}

.navlist{
  width: 100%;
  display: flex;
  gap: 10px;
}

.navlist :last-child {
  margin-left: auto;
} 
</style>