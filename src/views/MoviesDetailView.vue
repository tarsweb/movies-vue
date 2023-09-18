<template>
  <div class="movies">
    <!-- <h1>This is an movie page</h1>
    <h2>Movie {{ moviesId }}</h2> -->
    <button>Go Back</button>
    <div class="movie" >
      <img v-if="dataMovie.poster_path" 
          :src="pathImage + 'w500' + dataMovie.poster_path"
          :alt="dataMovie.title"
          loading="lazy"
          width='300' 
          height="450">
      <div>
        <h1>{{ dataMovie.title }}</h1>
        <h2> Original title : {{ dataMovie.original_title }}</h2>
        <div> 
          <h2>Vote / Votes :</h2>
          <!-- <p>{{dataMovie.vote_average.toFixed(1)}} / {{dataMovie.vote_count.toFixed(0)}}</p> -->
          <p>{{ dataMovie.vote_average }} / {{ dataMovie.vote_count }}</p>
        </div>
        <div> 
          <h2>Popularity :</h2>
          <!-- <p>{popularity.toFixed(0)}</p> -->
          <p>{{ dataMovie.popularity }}</p>
        </div>
        <div> 
          <h2>Genres :</h2>
          <!-- <p>{genres.map(({ name }) => name).join(', ')}</p> -->
          <p>{{ dataMovie.genres }}</p>
        </div>
        <h2>Synopsis :</h2>
        <p>{{ dataMovie.overview }}</p>
      </div>
    </div>
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
  import { ref, computed, toRefs, onMounted, inject } from 'vue'
  import { useRoute } from 'vue-router'
  
  const moviesApi = inject('moviesApi');
  const pathImage = inject('moviesApipathImage');

  const route = useRoute()

  const moviesId = computed(() => route.params.moviesId)
  // const backLinkHref = route.from ?? '/'
  // console.log(backLinkHref)

  const dataMovie = ref({})

  // const {
  //   poster_path,
  //   title,
  //   release_date,
  //   vote_average,
  //   vote_count,
  //   popularity,
  //   original_title,
  //   genres,
  //   overview,
  // } = computed(() => toRefs(dataMovie));

  // console.log("title",title);

  const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' }
  ]

  async function getMovie() {
    const response = await moviesApi.get(`/movie/${moviesId.value}`, {
    params: {
      //api_key: apiKey,
      language: "en"
    }
    })
    dataMovie.value = response.data
  }

  onMounted(() => 
    getMovie()
  )

// function onBack() {
//   $route.go(backLinkHref)
// }
</script>

<style scoped>

  .movie{
    display:grid;
    gap: 10px;
    grid-template-columns: 1fr 3fr;
  }
</style>
