<template>
  <div class="movies">
    <div v-if="Object.keys(dataMovie) !== 0">
      <button>Go Back</button>
      <div class="movie" >
        <img v-if="refComputed('poster_path')"
            :src="pathImage + 'w500' + refComputed('poster_path')"
            :alt="dataMovie.title"
            loading="lazy"
            width='300' 
            height="450">
        <div>
          <h1>{{ refComputed("title") }}</h1>
          <h2> Original title : {{ refComputed("original_title") }}</h2>
          <div class="description"> 
            <h2>Vote / Votes :</h2>
            <!-- <p>{{dataMovie.vote_average.toFixed(1)}} / {{dataMovie.vote_count.toFixed(0)}}</p> -->
            <p>{{ dataMovie.vote_average }} / {{ dataMovie.vote_count }}</p>
          </div>
          <div class="description"> 
            <h2>Popularity :</h2>
            <!-- <p>{popularity.toFixed(0)}</p> -->
            <p>{{ dataMovie.popularity }}</p>
          </div>
          <div class="description"> 
            <h2>Genres :</h2>
            <!-- <p>{genres.map(({ name }) => name).join(', ')}</p> -->
            <p>{{ dataMovie.genres }}</p>
            <!-- <p>{{ genres_str }}</p> -->
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
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, toRefs, onMounted, inject, watchEffect, watch, reactive, isRef } from 'vue'
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
  // } = computed(() => {return toRefs(dataMovie)});

  const refComputed = computed(() => function (param) {const variable = dataMovie.value[param]; return variable})
  
  const refComputed_= computed(() => {
      const param = ['title', 'poster_path']
      const res = param.reduce((acc, el) => acc = {... acc, [el] : ref(dataMovie.value[el])},{})
      console.log(res);
      return res
    })

  const {title, poster_path } = toRefs(refComputed_)

  // watchEffect(() => {
  //   console.log(refComputed_(['title', 'poster_path']));
  // })
  // const { title, genres_str } = computed(() => { 
  //   const title = dataMovie.value.title.toUpperCase();
  //   const genres_str = dataMovie.value.genres.reduce(acc, (el) => acc.push(el.name), []).join(",")
  //   return { title,  genres_str }
  // })


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
    // console.log(isRef(title));
  }

  onMounted(() => {
    getMovie()
    // console.log(refComputed('title'));
    // console.log(refComputed_(['title', 'poster_path']));
  })

// function onBack() {
//   $route.go(backLinkHref)
// }
</script>

<style scoped>
  img{
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    width: 100%;
    pointer-events: none;
  }

  .movie{
    display:grid;
    gap: 10px;
    grid-template-columns: 1fr 3fr;
  }
  .description{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>
