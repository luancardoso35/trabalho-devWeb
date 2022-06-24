<template>
    <NavbarView selected="subjects"/>
    <ContentView/>
</template>

<script>
    import ContentView from "../components/SubjectsView/ContentView.vue"
    import NavbarView from "../components/NavbarView.vue"

    export default {
        name: 'SubjectsView',
        components: {
            NavbarView,
            ContentView
        }
    }
</script>

<style>
    
</style>