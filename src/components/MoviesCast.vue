<template>
  <ul v-if="dataMovieCast.length > 0"> 
    <li v-for="{id, profile_path, name, character} in dataMovieCast" :key="id">
        <img v-if="profile_path" 
          :src="pathImage + 'w500' + profile_path"
          :alt="character"
          loading="lazy"
          height="50">
        <div>
          <h3>{{ name }}</h3>
          <p> {{ character }}</p>
        </div>  
    </li>
  </ul>
  <p v-else> No cast</p>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const moviesId = computed(() => route.params.moviesId)

  const apiKey=  "bb9be7856d820d280efdc8865f07d5b2"
  const pathImage = "https://image.tmdb.org/t/p/";

  const dataMovieCast = ref([])
  
  async function getMovieCast() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${moviesId.value}/credits?api_key=${apiKey}`
    );
    const data = await response.json();
    dataMovieCast.value = data.cast;
  }

  onMounted(() => 
    getMovieCast()
  )
</script>

<style scoped>
ul{
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill,minmax(145px,1fr))
}
li{
  display: flex;
  gap: 10px;
}
</style>