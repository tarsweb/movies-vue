<script setup>
//import TheWelcome from '../components/TheWelcome.vue'
import MoviesCardSet from '@/components/MoviesCardSet.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const apiKey=  "bb9be7856d820d280efdc8865f07d5b2"
const movies = ref([])

const route = useRoute()
const page = route.query.page ?? 1

;

async function getTrendingMovies(category) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/${category}?api_key=${apiKey}&page=${page}`
  );
  const data = await response.json();
  console.log(data);
  movies.value = data.results;
}

onMounted(() => 
    getTrendingMovies('week')
)

</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div v-if="movies.length > 0 ">
      <MoviesCardSet :movies="movies"/> 
    </div>
  </main>
</template>
