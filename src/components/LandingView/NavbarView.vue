<template>
    <div id="container">
        <router-link to="/">
            <img src="../../assets/logo.png"/>
        </router-link>
        <nav>
            <router-link class="link" :class="{ selected: selected === 'home' }" to="/">Home</router-link>
            <router-link class="link" :class="{ selected: selected === 'subjects' }"  to="/subjects">Disciplinas</router-link>
            <router-link class="link" :class="{ selected: selected === 'tests' }" to="/tests">Questões</router-link>
            <router-link class="link" :class="{ selected: selected === 'aboutUs' }" to="/aboutUs">Sobre nós</router-link>

        </nav>
        <div></div>
    </div>
    
</template>

<script>

    export default {
        name: "NavbarView",
        data() {
            return {
                selectedRoute: "home" 
            }
        },
        props: ["selected"]
    }
</script>

<style scoped>
    #container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--cyan);
        padding: 0.75rem 2rem;
    }

    .selected {
        background-color: var(--header-background-blue);
        border-radius: 45px;
        padding: 1rem 2rem;
    }

    .link {
        font-size: 20px;
        color: var(--black);
        font-weight: bold;
        text-decoration: none;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 2.5rem;
    }
</style>