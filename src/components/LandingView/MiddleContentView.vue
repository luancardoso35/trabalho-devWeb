<template>
    <div id="container">
        <div id="content-container">
            <p id="title">Aprovação garantida</p>
            <p id="description">O mapa completo para você impulsionar seus estudos e ter acesso às melhores universidades do país</p>
            <router-link to="/subjects">    
                <button>Venha fazer parte dessa jornada</button>
            </router-link>
        </div>
        <div id="image-container">
            <img id="image" src="../../assets/landing-page/homepage.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MiddleContentView"
    }
</script>

<style scoped>
    #container {
        display: flex;
        padding: 2rem 2rem;
    }

    #image {
        border-radius: 8px;
        width: 500px;
        height: 350px;
    }

    #content-container {
        text-align: center;
        margin: auto;
        transform: translateY(-10%);
    }

    #title {
        margin-bottom: 0.8rem;
        font-size: 3rem;
        background: linear-gradient(90deg, #00959E 0%, #2E7EDC 51.04%, #8B4BBD 73.96%, #671768 89.58%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }

    #description {
        margin-bottom: 2rem;
        font-size: 1.5rem;
        max-width: 700px;
    } 
    
    #image-container {
        min-width: 550px;
    }

    button {
        cursor: pointer;
        border: 0;
        font-size: 1.2rem;
        background-color: var(--blue);
        color: var(--white);
        border-radius: 2rem;
        padding: 1rem 2rem;
    }

    @media (min-width: 1200px) {
        #image {
            border-radius: 8px;
            width: 40vw;
            height: 60vh;
        }

        #container {
            padding: 4rem 4rem;
        }

        #title {
            font-size: 4rem;
        }

        #description {
            font-size: 2rem;
            max-width: 700px;
        } 

        #image-container {
            min-width: 700px;
        }
    }

</style>