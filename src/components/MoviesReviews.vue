<template>
  <div v-if="dataMovieReviews !== null">
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
    <p v-else> No reviews </p>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, inject } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const moviesId = computed(() => route.params.moviesId)
  
  const moviesApi = inject('moviesApi')

  const dataMovieReviews = ref(null)

  let controller
  
  async function getMovieReview() {
    controller = new AbortController()
    const response = await moviesApi.get(`/movie/${moviesId.value}/reviews`, {
      signal : controller.signal,
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