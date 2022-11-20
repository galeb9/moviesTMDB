<template>
  <div class="movies-item container--box" v-if="movie">
    <img v-if="movie.poster_path" class="movies-item__img" :src="'https://www.themoviedb.org/t/p/w220_and_h330_face/' + movie.poster_path" alt="Movie image">
    <div v-else class="movies-item__no-image">
      <font-awesome-icon class="icon__no-image" :icon='["far", "image"]' />
    </div>
    <div class="movies-item__info-container">
      <BaseProgress class="progress-placement" :size="34" :progress="movie.vote_average * 10" />
      <div class="movies-item__info"> 
        <h3 class="movies-item__title">{{ movie.original_title }}</h3>
        <p class="movies-item__release-date">{{ realseDate(movie.release_date) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: { 
    movie: { type: Object, default: () => {} }
  },
  methods: {
    realseDate(d) {
      let date = new Date(d);
      const dateArr = date.toString().split(" ")
      return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`
    }
  }
}
</script>

<style lang="scss">
  .movies-item {
    position: relative;
    flex-basis: 18%;
    min-width: 180px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    @media only screen and (max-width: 1390px) { flex-basis: 23% }
    @media only screen and (max-width: 1168px) { flex-basis: 31.5% }
    @media only screen and (max-width: 958px) { flex-basis: 48% }
    @media only screen and (max-width: 758px) { flex-basis: 31.5% }
    @media only screen and (max-width: 668px) { flex-basis: 48% }
    @media only screen and (max-width: 470px) { 
      flex-basis: 100%;
      max-width: 250px ;
    }

    .movies-item__img {
      height: 72%;
      border-radius: $radius $radius 0 0;
    }
    .movies-item__no-image {
      border-radius: $radius $radius 0 0;
      height: 72%;
      background: #dbdbdb;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon__no-image {
        font-size: 40px;
        color: #b5b5b5;
      }
    }
    .movies-item__info-container {
      height: 28%;
      position: relative;
      .progress-placement {
        position: absolute;
        top: calc(-34px / 2);
        left: 12px;
      }
      .movies-item__info {
        padding: 26px 12px 0px;
        .movies-item__title {
          font-size: 16px;
        }
        .movies-item__release-date {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
</style>