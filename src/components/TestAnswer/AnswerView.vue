<template>
    <main>
        <input type="radio" :checked="selected" name="group"/>
        {{text}}
    </main>
</template>

<script>
    export default {
        name: "AnswerView",
        props: ["text", "selected"]
    }
</script>

<style scoped>
    main {
        width: 90%;
        border: 1px solid black;
        padding: 0.7rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: white;
    }

    input {
        color: black;
    }
</style>