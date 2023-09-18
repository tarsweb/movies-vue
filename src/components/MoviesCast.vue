<template>
  <div v-if="dataMovieCast !== null">
    <ul v-if="dataMovieCast.length > 0">
      <li v-for="{id, profile_path, name, character} in dataMovieCast" :key="id">
          <img v-if="profile_path" 
            :src="pathImage + 'w500' + profile_path"
            :alt="character"
            loading="lazy"
            height="50">
            <template v-else>
              <IconsEmptyPhoto />
            </template> 
          <div>
            <h3>{{ name }}</h3>
            <p> {{ character }}</p>
          </div>  
      </li>
    </ul>
    <p v-else> No cast</p>
  </div> 
  <div v-else>
    Loading...
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, inject } from 'vue'
  import { useRoute } from 'vue-router'

  import IconsEmptyPhoto from '@/icons/IconsEmptyPhoto.vue';

  const route = useRoute()
  const moviesId = computed(() => route.params.moviesId)

  const moviesApi = inject('moviesApi');
  const pathImage = inject('moviesApipathImage');

  const dataMovieCast = ref(null)

  const controller = new AbortController()

  async function getMovieCast() {
    const response = await moviesApi.get(`/movie/${moviesId.value}/credits`, {
      signal : controller.signal,
      params: {
        //api_key: apiKey,
        language: "en"
      }
    })
    dataMovieCast.value = response.data.cast
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