<template>
  <div>
    <ul class="card-set">
      <li class="card-item" v-for="item in movies" :key="item.id">
        <RouterLink :to="{
          path: `/movies/${item.id}`
        }">
          <img v-if="item.poster_path" :src="pathImage + 'w500' + item.poster_path" loading="lazy" :alt="item.title"
            width="200" height="300">
          <div>
            <h2>{{ item.title }}</h2>
            <p>
              {{ item.genre_ids }} &#124; {{ item.release_date.slice(0, 4) }}
            </p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  const props = defineProps({
    movies: {
      type : Array,
      required : true
     }
  })

  const pathImage = "https://image.tmdb.org/t/p/"
</script>

<style scoped>
.card-set {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  margin: auto, 0;
  padding: calc((100vw - (4 * 2 * 4) / 8)), 4;
}
.card-item{
  width:  100%;
  list-style: none;

  border: 4 solid 2 ;
  border-radius: 20;
  overflow: hidden;
  /* box-shadow: ${({theme}) => theme.shadow.main} ${({theme}) => theme.colors.shadow};
  transition: box-shadow ${({theme}) => theme.transition.duration} ${({theme}) => theme.transition.timingfunction},
              transform ${({theme}) => theme.transition.duration} ${({theme}) => theme.transition.timingfunction}; */

  &:hover, &:focus {
    /* box-shadow: ${({theme}) => theme.shadow.accent} ${({theme}) => theme.colors.shadow}; */
    transform: scale(1.03);
  }

}
</style>