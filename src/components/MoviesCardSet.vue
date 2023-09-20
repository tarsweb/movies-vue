<template>
  <div>
    <ul class="card-set">
      <li class="card-item" v-for="item in movies" :key="item.id">
        <RouterLink :to="{
          path: `/movies/${item.id}`
        }">
          <img v-if="item.poster_path" :src="pathImage + 'w500' + item.poster_path" loading="lazy" :alt="item.title"
            width="200" height="300">
          <div class="descritpion">
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
  import { useRoute } from 'vue-router';

  const props = defineProps({
    movies: {
      type : Array,
      required : true
     },
    pathImage: {
      type: String,
      required : true
    }
  })

  const route = useRoute() 

</script>

<style scoped>

img{
  width: 100%;
  height: auto;
  object-fit: cover;
}

h2{
  color: var(--color-heading);
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
}

p{
  color: var(--color-text);
  font-weight: 500;
}

.card-set {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin: auto 0;
  padding: 16px calc(((100vw - (4 * 2 * 16px)) / 8));
}
.card-item{
  /* width:  100%; */
  list-style: none;

  border: 1px solid #eee ;
  border-radius: 4px;
  overflow: hidden;
  /* box-shadow: ${({theme}) => theme.shadow.main} ${({theme}) => theme.colors.shadow};*/
  box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.25);
  /*transition: box-shadow ${({theme}) => theme.transition.duration} ${({theme}) => theme.transition.timingfunction},
              transform ${({theme}) => theme.transition.duration} ${({theme}) => theme.transition.timingfunction}; */
  transition: box-shadow 250ms cubic-bezier(0.4,0,0.2,1), 
              transform 250ms cubic-bezier(0.4,0,0.2,1);

  &:hover, &:focus {
    /* box-shadow: ${({theme}) => theme.shadow.accent} ${({theme}) => theme.colors.shadow}; */
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.25);
    transform: scale(1.03);
  }
}

.descritpion{
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
}
</style>