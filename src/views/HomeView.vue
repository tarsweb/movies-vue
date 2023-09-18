<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import MoviesCardSet from '@/components/MoviesCardSet.vue';

import { ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';

const moviesApi = inject('moviesApi');
const moviesApipathImage = inject('moviesApipathImage');

const movies = ref([])

const route = useRoute()
const page = route.query.page ?? 1

async function getTrendingMovies(category) {
  const response = await moviesApi.get(`/trending/movie/${category}`, {
    params: {
      //api_key: apiKey,
      language: "en",
      page: page,
    }
  })
  movies.value = response.data.results;
}

onMounted(() => 
    getTrendingMovies('week')
)

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div v-if="movies.length > 0 ">
      <MoviesCardSet :movies='movies' :pathImage='moviesApipathImage' /> 
    </div>
    <div v-else>
      Loading...
    </div>
  </main>
</template>
