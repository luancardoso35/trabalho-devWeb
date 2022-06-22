<template>
  <NavbarView/>
  <div></div>
  <FooterView/>
  <router-view/>
</template>

<script>
  import NavbarView from "../components/NavbarView.vue"
  import FooterView from "../components/FooterView.vue"

  export default {
    name: "HomeView",
    components: {
      NavbarView,
      FooterView
    }
  }
</script>

<style>
div {
  height: 100px;
}
</style>

