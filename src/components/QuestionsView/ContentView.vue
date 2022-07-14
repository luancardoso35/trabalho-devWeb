<template>
    <section>
        <TopContentView title="Questões" :key="updateLife"/>

        <div id= "question-container">
            <div 
                v-for="(key, index) in Object.keys(db.questions)"
                :key="key"
                v-bind:class="{ 'solved': Object.values(db.questions[key])[0].solved, 'question-card': true}"
            >
                <div class = "left-content">
                    <p class="subject">{{key}}</p>
                    <p class="topic">{{Object.keys(db.questions[key])[0]}}</p>
                    <img id="coin" src="../../assets/coin.png" alt="moeda">
                    <p id="xp">{{Object.values(db.questions[key])[0]["xp"]}} XP</p>    
                </div>
                <div class = middle-content>
                    <p class="description">Assuntos: {{Object.values(db.questions[key])[0]["subjects"]}}</p>            
                </div>
                <div class="right-content">
                    <button 
                        v-if="!Object.values(db.questions[key])[0].solved" 
                        v-on:click="selectButton(index)" 
                        class="start-button" 
                        @click="showModal()"
                    >
                        <img src="../../assets/tests/startButton.png" alt="Começar">
                        <p>Começar</p>
                    </button>
                    <div class="results" v-if="Object.values(db.questions[key])[0].solved">
                        <p>
                            Resultado: 
                        </p>
                        {{Object.values(db.questions[key])[0].correctAnswers}} de {{Object.values(db.questions[key])[0].tests.length}}
                    </div>
                </div>
            </div>  
        </div>

        <div 
            id="grey-div" 
            v-if="selectedQuestion !== -1 && !Object.values(db.questions[Object.keys(db.questions)[selectedQuestion]])[0].solved"
            v-show="isModalVisible">
        </div>

        <QuestionModal
            v-if="selectedQuestion !== -1 && !Object.values(db.questions[Object.keys(db.questions)[selectedQuestion]])[0].solved"
            v-show="isModalVisible"
            @close="closeModal"
            :title='Object.keys(db.questions)[selectedQuestion]'
            :subject='Object.keys(db.questions[Object.keys(db.questions)[selectedQuestion]])[0]'
            :xp='Object.values(db.questions[Object.keys(db.questions)[selectedQuestion]])[0].xp'
        />
        
    </section>
</template>

<script>
    import QuestionModal from './QuestionModal.vue';
    import db from '../../db.json'
    import TopContentView from '../TopContentInfo/TopContentView.vue';
    export default {
    name: "ContentView",
    components: { QuestionModal, TopContentView },
    data() {
      return {
        db,
        isModalVisible: false,
        progress: db.progress / 100,
        selectedQuestion: -1,
        updateLife:0
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      selectButton(index) {
        this.selectedQuestion = index
      },
      closeModal() {
        this.isModalVisible = false;
        this.updateLife+=1;
      }
    }
  };

</script>

<style scoped> 

    .results {
        margin: auto;
        font-weight: bold;
    }

    .results p {
        margin: 0;
        margin-bottom: 10px;
    }
    .center {
        width: calc(126px * v-bind(progress));
        height: 19px;
        background:#FABE2C;
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translateY(-60%);
    }

    .image-container {
        position: relative;
        text-align: center;
        color: #fff;
    }

    section {
        background: linear-gradient(287.56deg, #8ADDDD 0%, #E0EAEA 92.19%, rgba(255, 255, 255, 0) 100%);
        padding: 10vh 10vw;
        
    }    
    #info-container{
        display: flex;
        float: right;
    }

    #title{
        margin-top: 0.8rem;
        margin-left: 2.0rem;
        font-size: 3rem;

    }
    #info{
        float: right;
        text-align: right;
    }

    #question-container{
        margin-top: 5%;
        margin-bottom: 10%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .question-card{
        display: flex;
        margin: 0 10%;
        box-sizing: border-box;
        margin-bottom: 1rem;
        background: #FFFFFF;
        border: 1px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
    }

    .solved {
        background: linear-gradient(180deg, rgba(83, 240, 9, 0.71) -116.9%, rgba(222, 222, 222, 0) 173.94%);
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
    }
    .left-content{
        margin-right: 20px;
        text-align: center;
    }
    .middle-content{
        text-align: center;
        margin: 0 auto;
        font-family: 'Heebo';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 29px;
        text-align: center;

    
    }
    .right-content{
        display: flex;
        margin-top: 1rem;
        margin-right: 2%;
        text-align: center;
    }
    .subject{
        margin:0 auto;
        width: 209px;
        height: 45px;

        font-family: 'Heebo';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 47px;
        text-align: center;
    }

    .topic{
        margin: 0 auto;
        width: 209px;
        height: 45px;
        top: 30rem;

        font-family: 'Heebo';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        text-align: center;

        color: #777777;
    }

    #coin{
        width:29px;
        height:29px
    }

   .details-button{
        background-color: transparent;
        border: transparent;
        
    }
    .details-button:hover{
        cursor: pointer;
    }
    .start-button{
        background-color: transparent;
        border: transparent;
        
    }
    .start-button:hover{
        cursor: pointer;
    }

    #grey-div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.8;

    }
</style>