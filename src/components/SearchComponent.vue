<template>
  <div class="search-container py-1">
    <font-awesome-icon
      icon="magnifying-glass"
      class="search-icon px-2"
    ></font-awesome-icon>
    <input class="search-input" type="text" placeholder="Search..." />
  </div>
</template>

<script lang="ts">
export default {
  name: "SearchComponent",
  props: {},
};
</script>

<style scoped lang="scss">
.search-icon {
  color: $accent-black;
}
.search-container {
  background-color: $light-grey;
  color: $accent-black;
  border-radius: 15px;
}

.search-input {
  background: none;
}
</style>
