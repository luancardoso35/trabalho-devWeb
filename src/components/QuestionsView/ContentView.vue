<template>
    <section>
        <div id="title-container">
            <div>
                <p>Questões</p>
            </div>
            <div id="info-container">
                <div class="level image-container">
                    <img src="../../assets/subjects/progress.png"/>
                    <div id="img-start">{{db.currentLevel}}</div>
                    <div id="img-end">{{db.currentLevel+1}}</div>
                    <div id="img-xp">350 XP</div>
                    <div class="center"></div>
                </div>
                <div class="image-container">
                    <img src="../../assets/subjects/heart.png">
                    <span id="lifes">{{db.lifes}}</span>
                </div>
            </div>    
        </div>

        <div id= "question-container">
            <div 
            v-for="(key) in Object.keys(db.questions)"
            :key="key"
            class="question-card">
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
                    <button class = "details-button">
                        <img src="../../assets/tests/detailsButton.png" alt="Ver mais">
                        <p style="margin:0.2rem 0.2rem">Ver detalhes</p>
                    </button>
                    <button class="start-button" @click="showModal()">
                        <img src="../../assets/tests/startButton.png" alt="Começar">
                        <p>Começar</p>
                    </button>
                </div>

            </div>  
        </div>

        <div id="grey-div" v-show="isModalVisible"></div>

        <QuestionModal
            v-show="isModalVisible"
            @close="closeModal"
            title="Matemática"
            subject="Trigonometria"
            xp="30"
        >
        </QuestionModal>
        
    </section>
</template>

<script>
    import QuestionModal from './QuestionModal.vue';
    import db from '../../db.json'
    export default {
    name: "ContentView",
    components: { QuestionModal },
    data() {
      return {
        db,
        isModalVisible: false,
        progress: db.progress / 100
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };

</script>

<style scoped>

    #lifes {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 130%;
    }

    #title-container p {
        margin: 0;
        font-weight: bold;
        font-size: 24px;
    }

    #title-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
    }

    #xp {
        font-weight: bold;
        font-size: 110%;
        margin: 0.5rem 0 1rem 0;
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

    #img-xp {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -60%);
        font-weight: bold;
        color: rgba(93, 93, 93, 1);
    }

    #img-start {
        position: absolute;
        top: 50%;
        transform: translate(50%, -60%);
        font-weight: bold;
        color: #000;
        font-size: 130%;
    }

    #img-end {
        position: absolute;
        top: 50%;
        left: 95%;
        transform: translate(-100%, -60%);
        font-weight: bold;
        font-size: 130%;
        color: #000;
    }

    .image-container {
        position: relative;
        text-align: center;
        color: #fff;
    }

    #info-container {
        display: flex;
        align-items: center;
        gap: 5vw;
    }

    section {
        background: linear-gradient(287.56deg, #8ADDDD 0%, #E0EAEA 92.19%, rgba(255, 255, 255, 0) 100%);
        padding: 10vh 10vw;
        height: 70vh;
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