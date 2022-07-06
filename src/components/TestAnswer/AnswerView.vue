<template>
    <main :class="color">
        <input type="radio" :checked="selected" name="group"/>
        {{text}}
       
    </main>
</template>

<script>
    export default {
        name: "AnswerView",
        props: ["text", "selected", "correct", "color"],
    }
</script>

<style scoped>
    .white {
        background-color: #FFF;
    }

    .green {
        background-color: green;
    }


    main {
        width: 90%;
        border: 1px solid black;
        padding: 0.7rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    input {
        color: black;
    }
</style>