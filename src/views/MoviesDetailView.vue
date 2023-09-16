<template>
  <div class="movies">
    <h1>This is an movie page</h1>
    <h2>Movie {{ moviesId }}</h2>
    <button>Go Back</button>
    <nav>
      <RouterLink v-for="item in navItems" :to="{
        path: `/movies/${moviesId}/${item.href}`
      }">
        {{ item.text }}
      </RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const moviesId = computed(() => route.params.moviesId)
// const backLinkHref = route.from ?? '/'
// console.log(backLinkHref)

const navItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' }
]

// function onBack() {
//   $route.go(backLinkHref)
// }
</script>
