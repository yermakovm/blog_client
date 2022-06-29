<template>
  <div class="sidebar-container pl-1 pt-3">
    <router-link to="/" class="sidebar-logo">
      <span class="sidebar-icon fa-stack fa-1x">
        <font-awesome-icon
          icon="square"
          class="sidebar-icon__square fa-stack-2x"
        ></font-awesome-icon>
        <font-awesome-icon
          icon="terminal"
          class="sidebar-icon__terminal fa-stack-1x fa-inverse"
        >
        </font-awesome-icon>
      </span>
      <div class="sidebar-text">
        <span class="sidebar-text__primary px-2"> The Blog </span>
        <span class="sidebar-text__secondary px-2">Is all you need</span>
      </div>
    </router-link>
    <SearchComponent class="my-5"></SearchComponent>
    <SidebarSection
      :category="category"
      v-for="category in categories"
      :key="category.name"
      class="pb-3"
    ></SidebarSection>
    <div class="sidebar-nav">
      <router-link class="sidebar-nav-link" to="/login">Login</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import SearchComponent from "./SearchComponent.vue";
import SidebarSection from "./SidebarSection.vue";

export default {
  name: "SidebarNav",
  props: {},
  components: {
    SearchComponent,
    SidebarSection,
  },
  data: () => {
    return {
      categories: [
        {
          name: "Patterns",
          subcategories: [
            {
              name: "Creational",
              icon: "industry",
            },
            {
              name: "Structural",
              icon: "network-wired",
            },
            {
              name: "Behavioral",
              icon: "chess-knight",
            },
          ],
        },
        {
          name: "Front-End",
          subcategories: [
            {
              name: "HTML",
              icon: ["fa-brands", "html5"],
            },
            {
              name: "CSS",
              icon: ["fa-brands", "css3"],
            },
            {
              name: "JavaScript",
              icon: ["fa-brands", "js"],
            },
          ],
        },
        {
          name: "Back-End",
          subcategories: [
            {
              name: ".NET",
              icon: "server",
            },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  border-right: 1px solid white;
}

.sidebar-logo {
  display: flex;
  align-items: center;
}

.sidebar-icon {
  font-size: 1.5em;

  &__square {
    color: $accent-white;
  }

  &__terminal {
    color: $accent-black;
  }
}

.sidebar-text {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1em;

  &__primary {
    color: $accent-white;
  }

  &__secondary {
    color: $dark-grey;
  }
}

.sidebar-nav {
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  gap: 1em;

  .sidebar-nav-link:hover {
    color: $accent-red;
  }
}
</style>
