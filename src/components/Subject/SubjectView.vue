<template>
    <div id="subject-container">
        <a>
        <img :src="require(`@/assets/subjects/${filename}`)" alt="Imagem da disciplina">
        <p id="title">{{title}}</p>
        </a>
        <p id="subtitle">Seu rank: {{rank}}º de {{total}}</p>
    </div>
</template>

<script>
    export default {
        name: "SubjectView",
        props: ["filename", "title", "rank", "total"],
    }
</script>

<style scoped>
    a {
        text-align: center;
    }

    a:hover {
        text-decoration: underline;
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