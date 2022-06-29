<template>
  <div class="section-container mx-3">
    <h6 class="section-name">
      {{ category.name }}
    </h6>
    <router-link
      @mouseover="action = subcategory.name"
      @mouseleave="action = null"
      class="py-1 section-subcategory"
      to="/"
      v-for="subcategory in category.subcategories"
      :key="subcategory.name"
    >
      <span>
        <font-awesome-icon
          class="section-icon"
          :class="{ 'fa-flip': action == subcategory.name }"
          :icon="subcategory.icon"
        ></font-awesome-icon>
        {{ subcategory.name }}
      </span>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "SidebarSection",
  props: {
    category: Object,
  },
  components: {},
  data: () => {
    return {
      action: null,
    };
  },
};
</script>

<style scoped lang="scss">
.section-name {
  color: $dark-grey;
  font-weight: bolder;
  font-size: 0.8em;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.section-icon {
  --fa-animation-duration: 3s;
}

.section-container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-bottom: 1px solid $accent-white;
  width: 80%;
}

.section-subcategory {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.section-subcategory:hover {
  background-color: $accent-white;
  color: $accent-black;
  border-radius: 15px;
}
</style>
