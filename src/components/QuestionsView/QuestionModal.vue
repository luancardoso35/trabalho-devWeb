<template>
    <div id="background-modal">
        <div id="inner-modal">
            <section>
                <div>
                    <p id="title">{{title}}</p>
                    <p id="subtitle">{{subject}}</p>
                </div>
                <button class="close-button" @click="close(db.questions[title][subject])">
                    <img src="../../assets/tests/closeButton.png" alt="close" v-on:click="close()">
                </button>
            </section>
            <p id="progress">
                    Questão {{progress+1}} de {{db.questions[title][subject].tests.length}}
            </p>

            <div id="title-container">
                <p>{{db.questions[title][subject].tests[progress].title}}</p>
            </div>

            <p id="lifes">
                Vidas restantes: <span>{{db.lifes}}</span>
            </p>

            <section id="alternatives">
                    <AnswerView
                        :key="alternative" 
                        v-for="(alternative, index) in db.questions[title][subject].tests[progress].alternatives"
                        v-on:click="selected = index" 
                        :selected="selected == index"
                        :text="db.questions[title][subject].tests[progress].alternatives[index]"
                        :color="(checkAnswer && index == db.questions[title][subject].tests[progress].answer) ? 'green' : 'white'"
                    />
            </section>

            <footer>
                <button 
                    id="continue-button"
                    v-on:click="handleButtonClick(db.questions[title][subject])"
                    v-if="!showResults"
                >
                    {{buttonText}}
                </button>

                <p
                    id="results"
                    v-if="showResults"
                >
                    Você acertou {{correctAnswers}} de {{db.questions[title][subject].tests.length}}
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
    import db from '../../db.json'
import AnswerView from '../TestAnswer/AnswerView.vue'

    export default {
    name: "QuestionModal",
    props: ["title", "subject", "xp", ],
    methods: {
        close(tests) {
            this.$emit("close");

            if (this.showResults) {
                tests.solved = true
            }
            this.checkAnswer = false
            this.buttonText = "Verificar"
            this.selected = -1
            this.progress = 0,
            this.selected = -1,
            this.buttonText = "Verificar",
            this.correctAnswers = 0,
            this.showResults = false
        },
        incrementQuestion() {
            this.checkAnswer = false
            this.buttonText = "Verificar"
            this.selected = -1
            this.progress++;
        },
        handleButtonClick(tests) {
            if (this.buttonText == "Verificar") {
                if (this.selected == tests.tests[this.progress].answer) {
                    this.correctAnswers++
                } else {
                    if (db.lifes > 0) {
                        db.lifes--; 
                    }
                }
                this.checkAnswer = true
                this.buttonText = "Avançar"
            } else {
                if (this.progress == tests.tests.length - 1) {
                    this.showResults = true
                    
                    db.progress += Math.round(this.correctAnswers * (tests.xp / tests.tests.length))
                    tests.correctAnswers = this.correctAnswers
                    if (db.progress >= 100) {
                        db.currentLevel += 1
                        db.progress -= 100
                    }
                } else {
                    this.incrementQuestion()
                }
            }
        }
    },
    data() {
        return {
            db,
            progress: 0,
            selected: -1,
            checkAnswer: false,
            buttonText: "Verificar",
            correctAnswers: 0,
            showResults: false,
        };
    },
    components: { AnswerView }
};
</script>

<style scoped>

    #results {
        font-weight: bold;
        font-size: 120%;
    }

    img {
        width: 30px;
        height: 30px;
    }

    footer {
        margin: 2rem 0 0 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
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

    #title-container {
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