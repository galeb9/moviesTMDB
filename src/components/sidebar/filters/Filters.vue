<template>
  <div class='filters__container'>
    <BaseDropdown title="Filters">
      <Genres @selected-genres="moveData" :genres="genres" />
    </BaseDropdown>
  </div>
</template>

<script>
import Genres from './Genres.vue'
import BaseDropdown from '@/components/UI/BaseDropdown'

export default {
  name: 'Filters',
  components: {
    Genres,
    BaseDropdown
  },
  props: {
    genres: { type: Array, default: () => [] }
  },
  methods: {
    moveData (selectedGenres) {
      this.$emit("selectedGenres", selectedGenres)
    }
  }
}
</script>

<style lang="scss">
  .filters__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>