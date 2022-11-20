<template>
  <div class="sidebar">
    <Filters @selected-genres="getSelectedGenres" :genres="genres" />
    <button 
      @click="getResults" 
      :disabled="!btnActive" 
      :class="['sidebar__btn', { 'sidebar__btn--inactive' : !btnActive }]"
    >Search</button>
  </div>
</template>

<script>
import Filters from "./filters/Filters.vue"
export default {
    name: "Sidebar",
    props: {
        genres: { type: Array, default: () => [] }
    },
    components: {
        Filters
    },
    data () {
      return {
        selectedGenres: [],
        btnActive: false
      }
    },
    methods: {
      getSelectedGenres (data) {
        this.selectedGenres = data
        this.btnActive = true
      },
      getResults () {
        this.$emit("search", this.selectedGenres)
        this.btnActive = false
      }
    }
}
</script>

<style lang="scss">
  .sidebar {
    flex-basis: 20%;
    min-width: 260px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    .sidebar__btn {
      font-size: 20px;
      padding: 16px 0;
      border-radius: 30px;
      line-height: 1;
      font-weight: 600;
      background: $primary;
      color: white;
    }
    .sidebar__btn--inactive{
      background: $lightGrey;
      color: $darkGrey;
      cursor: default;
    }
  }
</style>