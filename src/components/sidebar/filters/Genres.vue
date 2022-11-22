<template>
  <div class="genres">
    <h4>Genres</h4>
    <div class="genres__body">
      <p
        v-for="(item, index) in genresList"
        :key="index"
        :class="['genres__body-item', { selected: item.selected }]"
        @click="selectGenre(item)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Genres",
  props: {
    genres: { type: Array, default: () => [] },
  },
  data() {
    return {
      activeGenre: "",
      genresList: [],
      selectedGenres: [],
    };
  },
  methods: {
    selectGenre(item) {
      item.selected = !item.selected;
      this.selectedGenres = this.genresList
        .filter((el) => el.selected)
        .map((el) => el.id);
      this.$emit("selectedGenres", this.selectedGenres);
    },
  },
  mounted() {
    this.genresList = this.genres;
  },
};
</script>

<style lang="scss">
.genres {
  h4 {
    font-weight: 300 !important;
  }
  .genres__body {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    .genres__body-item {
      transition: all 0.03s ease-in;
      cursor: pointer;
      border-radius: 14px;
      padding: 4px 12px;
      font-size: 14px;
      border: 1px solid $darkGrey;
      &:hover {
        background-color: $primary;
        border: 1px solid $primary;
        color: white;
      }
    }
    .selected {
      background-color: $primary;
      border: 1px solid $primary;
      color: white;
    }
  }
}
</style>
