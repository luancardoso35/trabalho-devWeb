<template>
    <div id="container">
        <router-link to="/">
            <img src="../assets/logo.png"/>
        </router-link>
        <nav>
            <router-link class="link" :class="{ selected: selectedRoute === 'plans' }" @click="selectedRoute = 'plans'" to="/plans">Planos</router-link>
            <router-link class="link" to="/about"  @click="selectedRoute = 'about'">Sobre Nós</router-link>
            <router-link class="link" to="/faq"  @click="selectedRoute = 'faq'">FAQ</router-link>

        </nav>
        <div></div>
    </div>
</template>

<script>

    export default {
        name: "NavbarView",
        data() {
            return {
                selectedRoute: "plans" 
            }
        }
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
        color: #000;
        font-weight: bold;
        text-decoration: none;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
</style>