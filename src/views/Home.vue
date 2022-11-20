<template>
    <div class="home__container">
      <h1 class="home__heading">Popular Movies</h1>
      <div class="home">
        <Sidebar :genres="genres" @search="searchByGenre" />
        <MovieList :movies="movies" @loadMore="loadMore" @handle-scroll="handleScroll"/>
      </div>
    </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar.vue"
import MovieList from "@/components/movies/MoviesList.vue"
import tmdb from "../api/tmdb"

export default {
  name: "Home",
  components: {
    Sidebar,
    MovieList
  },
  data () {
    return {
      movies: [],
      genres: [],
      pageCounter: 1,
      selectedGenre: [],
      searchType: ""
    }
  },
  watch: {
    selectedGenre () {
      this.pageCounter = 1
    }
  },
  methods: {
    async getGenres() {
      const response = await tmdb.get("/genre/movie/list") 
      response.data.genres.forEach(item => {
          this.genres.push({
              ...item,
              selected: false
          })
      })
    },
    async tmdbGet(path, params) {
      const response = await tmdb.get(path, { params })
      return response.data.results;
    },
    async getMovies () {
      const params = { page: this.pageCounter }
      let data = [];

      if(this.selectedGenre.length > 0) {
        params.with_genres = encodeURI(this.selectedGenre.join(","))
        data = await this.tmdbGet("discover/movie", params)
      } else {
        data = await this.tmdbGet("movie/popular", params)
      }
      this.pageCounter > 1 ? this.movies.push(...data) : this.movies = data
    },
    searchByGenre (genres) {
      this.selectedGenre = genres
      this.getMovies();
    },
    async loadMore () {
      this.pageCounter++
      this.getMovies()
    },
    handleScroll () {
      if (this.pageCounter > 1) this.loadMore()
    }
  },
  mounted() {
    this.getMovies()
    this.getGenres()
  },
}
</script>

<style lang="scss"> 
  .home__container{
    .home__heading {
      margin-bottom: 16px;
    }
    .home {
      display: flex;
      gap: 30px;
 
    }
    @media only screen and (max-width: 758px ) {
      .home {
        flex-direction: column;
      }
      .home__heading {
        font-size: 26px;
      }
    }
  }
</style>
