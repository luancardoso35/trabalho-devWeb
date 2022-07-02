<template>
    <section>
        <div id="upper-container">
            <p id = "title">Questões</p>
        </div>

        <div id= "question-container">
            <div class="question-card">
                <div class = "left-content">
                    <p class="subject">Matemática</p>
                    <p class="topic">Trigonometria</p>
                    <img id="coin" src="../../assets/coin.png" alt="moeda">
                    <p>30 xp</p>    
                </div>
                <div class = middle-content>
                    <p class="description">Assuntos: Teorema de pitágoras, ângulos no triângulo, classificação de triângulos, ...</p>            
                </div>
                <div class="right-content">
                    <button class = "details-button">
                        <img src="../../assets/detailsButton.png" alt="Ver mais">
                        <p style="margin:0.2rem 0.2rem">Ver detalhes</p>
                    </button>
                    <button class="start-button">
                        <img src="../../assets/startButton.png" alt="Começar">
                        <p>Começar</p>
                    </button>
                </div>

            </div>  
        </div>
        
    </section>
</template>

<script>
    export default {
        name: "ContentView"
    }
</script>

<style scoped>
    section {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        top: 121px;
        background:  linear-gradient(287.56deg, #8ADDDD 0%, #E0EAEA 92.19%, rgba(255, 255, 255, 0) 100%);

    }    

    #upper-container {
       
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

        background: #FFFFFF;
        border: 1px solid #000000;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        /*background: linear-gradient(180deg, rgba(83, 240, 9, 0.71) -116.9%, rgba(222, 222, 222, 0) 173.94%);
        border: 1px solid #000000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        */


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
        margin-top: 1rem;
        margin-right: 50px;
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
</style>