<template>
  <div class="movies-list__container">
    <div class="movies-list" ref="scrollComponent">
      <MoviesItem v-for="(item, index) in movies" :key="index" :movie="item" />
    </div>
    <button class="movies__btn" @click="$emit('loadMore')">Load more</button>
  </div>
</template>

<script>
import MoviesItem from "./MoviesItem.vue"

export default {
    name: "MoviesList",
    components: {
      MoviesItem
    },
    props: {
      movies: { type: Array, default: () => [] },
    },
    methods: {
      handleScroll () {
        let element = this.$refs.scrollComponent
        if(element.getBoundingClientRect().bottom < window.innerHeight) {
          this.$emit("handleScroll")
        }
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll)
    },
    unmounted () {
      window.removeEventListener("scroll", this.handleScroll)
    }
}
</script>

<style lang="scss">
.movies-list__container {
  flex-basis: 80%;
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 2.5%;
    @media only screen and (max-width: 470px) { 
      align-items: center;
      justify-content: center;
    }

  }
  .movies__btn {
    background-color: $primary;
    color: white;
    font-size: 20px;
    padding: 16px 0;
    border-radius: $radius;
    width: 100%;
    margin-top: 30px;
  }
}

</style>