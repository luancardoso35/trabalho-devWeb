<template>
    <div id="subject-container">
        <a href="/tests">
            <img :src="require(`@/assets/subjects/${filename}`)" alt="Imagem da disciplina">
            <p id="title">{{title}}</p>
        </a>
        <p id="subtitle">Seu rank: {{rank}}º de {{total}}</p>
    </div>
</template>

<script>
    export default {
        name: "SubjectView",
        props: ["filename", "title", "rank", "total", "urlName"],
    }
</script>

<style scoped>
    a {
        text-align: center;
        color: black;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
        color: black;
    }

    #subject-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #title {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        margin: 2vh 0;
    }

    img {
        cursor: pointer;
    }

    #subtitle {
        margin: 0;
        font-weight: bold;
        color: rgba(94, 94, 94, 1);
        font-size: 18px;
    }
</style>