<script setup>
  //import TheWelcome from '../components/TheWelcome.vue'
  import MoviesCardSet from '@/components/MoviesCardSet.vue';

  import { ref, onMounted, inject, watchEffect } from 'vue';
  import { useRoute } from 'vue-router';

  const moviesApi = inject('moviesApi');
  const moviesApipathImage = inject('moviesApipathImage');

  const movies = ref([])

  const route = useRoute()
  const page = ref(route.query.page ?? 1)

  let controller

  async function getTrendingMovies(category) {
    controller = new AbortController();
    const response = await moviesApi.get(`/trending/movie/${category}`, {
      signal : controller.signal,
      params: {
        //api_key: apiKey,
        language: "en",
        page: page.value,
      }
    })
    movies.value = response.data.results;
  }

  // onMounted(() => 
  //     getTrendingMovies('week')
  // )

  watchEffect( async (onInvalidate)  => {
    onInvalidate(() => {
      controller.abort()
    })
    getTrendingMovies('week')
  })
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
