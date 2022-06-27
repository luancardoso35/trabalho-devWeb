<template>
    <NavbarView selected="tests"/>
    <ContentView/>
</template>

<script>
    import ContentView from "../components/QuestionsView/ContentView.vue"
    import NavbarView from "../components/NavbarView.vue"

    export default {
        name: 'QuestionsView',
        components: {
            NavbarView,
            ContentView
        }
    }
</script>

<style>
    
</style>