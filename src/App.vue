<template>
  <div>
    <SidebarNav></SidebarNav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SidebarNav from "@/components/SidebarNav.vue";

@Options({
  components: {
    SidebarNav,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: $font-family-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $accent-white;
  margin-top: 60px;
}
</style>
