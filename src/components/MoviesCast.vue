<template>
  <div v-if="dataMovieCast !== null">
    <ul v-if="dataMovieCast.length > 0 ">
      <li v-for="{id, profile_path, name, character} in dataMovieCast" :key="id">
          <img v-if="profile_path" 
            :src="pathImage + 'w500' + profile_path"
            :alt="character"
            loading="lazy"
            height="50">
          <template v-else>
              <IconsEmptyPhoto />
          </template>
          <div class="description">
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
  import { ref, computed, onMounted, onBeforeUnmount, watchEffect, watch,  inject } from 'vue'
  import { useRoute } from 'vue-router'

  import IconsEmptyPhoto from './icons/IconsEmptyPhoto.vue'

  const route = useRoute()
  const moviesId = computed(() => route.params.moviesId)

  const moviesApi = inject('moviesApi');
  const pathImage = inject('moviesApipathImage');

  const dataMovieCast = ref(null)

  let controller

  async function getMovieCast() {
    controller = new AbortController();
    try {
    const response = await moviesApi.get(`/movie/${moviesId.value}/credits`, {
      signal : controller.signal,
      params: {
        //api_key: apiKey,
        language: "en"
      }
    })
    dataMovieCast.value = response.data.cast}
    catch (error) {
      console.log(error);
      dataMovieCast.value = null
    }
  }

  // onMounted(() => {
  //   getMovieCast()
  // })
  watchEffect( async (onInvalidate)  => {
    onInvalidate(() => {
      controller.abort()
    })
    getMovieCast('week')
  })

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
    flex-direction: column;
  }

  img{
    /* width: 100%; */
    height: auto;
    object-fit: cover;
  }

  .description{
    display: flex;
    flex-direction: column;
  }
</style>