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
  import { ref, computed, onMounted, inject } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const moviesId = computed(() => route.params.moviesId)
  
  const moviesApi = inject('moviesApi');

  const dataMovieReviews = ref([])
  
  async function getMovieReview() {
    const response = await moviesApi.get(`/movie/${moviesId.value}/reviews`, {
      params: {
        //api_key: apiKey,
        language: "en"
      }
    })
    dataMovieReviews.value = response.data.results;
  }

  onMounted(() => 
    getMovieReview()
  )
</script>