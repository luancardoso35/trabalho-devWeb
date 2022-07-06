<template>
    <div id="background-modal">
        <div id="inner-modal">
            <section>
                <div>
                    <p id="title">{{title}}</p>
                    <p id="subtitle">{{subject}}</p>
                </div>
                <button class="close-button" @click="close">
                    <img src="../../assets/tests/closeButton.png" alt="close">
                </button>
            </section>
            <p id="progress">
                    Questão {{progress}} de {{db.questions[title][subject].tests.length}}
            </p>

            <div id="content-container">
                <p>{{db.questions[title][subject].tests[progress].title}}</p>
            </div>

            <p id="lifes">
                Vidas restantes: <span>{{db.lifes}}</span>
            </p>

            <section id="alternatives">
                <AnswerView
                    v-on:click="selected = index" 
                    :key="alternative" 
                    v-for="(alternative, index) in db.questions[title][subject].tests[progress].alternatives" 
                    :text="db.questions[title][subject].tests[progress].alternatives[index]"
                />
            </section>

            <footer>
                <button id="continue-button">
                    Avançar
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
    import db from '../../db.json'
import AnswerView from '../TestAnswer/AnswerView.vue'

    export default {
    name: "QuestionModal",
    props: ["title", "subject"],
    methods: {
        close() {
            this.$emit("close");
        },
        incrementQuestion() {
            this.progress++;
        }
    },
    data() {
        return {
            db,
            progress: 1,
            selected: -1,
        };
    },
    components: { AnswerView }
};
</script>

<style scoped>
    footer {
        margin: 2rem 0 0 1.5rem;
        display: flex;
        justify-content: center;
    }

    footer button {
        border-radius: 8px;
        color: #FFF;
        border: none;
        background-color: #1275AE;
        width: 10vw;
        height: 5vh;
        font-size: 120%;
        cursor: pointer;
    }

    #alternatives {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    span {
        color: #F44336;
    }

    #lifes {
        font-size: 110%;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    #progress {
        font-weight: bold;
        font-size: 110%;
        margin-bottom: 1rem;
    }

    #content-container {
        font-size: 105%;
        padding: 0 2rem;
    }

    #inner-modal section div {
        margin-bottom: 20px;
    }

    div p {
        margin: 10px 0;
    }
    #inner-modal section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #title {
        font-weight: bold;
        font-size: 150%;
    }
    #subtitle {
        font-weight: bold;
        font-size: 130%;
        color: #777777;
    }

    #background-modal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #inner-modal{
        padding: 1rem 4rem;
        background:#D9D9D9;    
        border-radius: 8px;
        width: 50%;
    }
    #upper-container{
        display: flex;
        justify-content: space-between;   
        border-radius: 8px;
    }

    .close-button{
        background-color: transparent;
        border: transparent;
    }
    .close-button:hover{
        cursor:pointer
    }
    .modal-header {
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
        flex-direction: column;
        justify-content: flex-end;
    }

    .modal-body {
        position: relative;
        padding: 20px 10px;
    }

    .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>