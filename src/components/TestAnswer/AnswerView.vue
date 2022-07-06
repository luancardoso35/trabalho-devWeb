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
        background: linear-gradient(180deg, rgba(92, 255, 16, 0.71) -116.9%, rgba(94, 227, 31, 0.71) 24.88%, rgba(222, 222, 222, 0) 329.35%);    
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