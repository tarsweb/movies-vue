<template>
  <ul v-if="dataMovieReviews.length > 0"> 
    <li v-for="{id, author, author_details:{username}, content, created_at} in dataMovieReviews" :key="id">
      <div>
        <h3>{{ author }}</h3>
        <p>{{ username }}</p>
        <p>{{ created_at }}</p>
      </div>
      <p> {{ content }}</p>
    </li>
  </ul>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const moviesId = computed(() => route.params.moviesId)
  const apiKey=  "bb9be7856d820d280efdc8865f07d5b2"

  const dataMovieReviews = ref([])
  
  async function getMovieReview() {

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId.value}/reviews?api_key=${apiKey}`
    );
    const data = await response.json();
    dataMovieReviews.value = data.results;
  }

  onMounted(() => 
    getMovieReview()
  )
</script>