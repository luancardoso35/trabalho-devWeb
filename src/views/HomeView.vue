<template>
  <NavbarView selected="home"/>
  <MiddleContentView/>
  <FooterView/>
</template>

<script>
  import NavbarView from "../components/LandingView/NavbarView.vue"
  import FooterView from "../components/LandingView/FooterView.vue"
  import MiddleContentView from "../components/LandingView/MiddleContentView.vue"

  export default {
    name: "HomeView",
    components: {
      NavbarView,
      FooterView,
      MiddleContentView
    }
  }
</script>

<style>
</style>

