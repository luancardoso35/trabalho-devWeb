<template>
    <section>
        <div id="title-container">
            <div>
                <p>Disciplinas</p>
            </div>
            <div id="info-container">
                <div class="image-container">
                    <img src="../../assets/progress.png"/>
                    <div class="center" ></div>
                </div>
                <div class="image-container">
                    <img src="../../assets/heart.png">
                    <span id="lifes">{{db.lifes}}</span>
                </div>
            </div>    
        </div>

        
    </section>
</template>

<script>
    import db from '../../db.json'

    export default {
        name: "ContentView",
        data(){
              return{
                  db,
                  progress: db.progress / 100
              }
          }
    }
</script>

<style scoped>
    section {
        background: linear-gradient(287.56deg, #8ADDDD 0%, #E0EAEA 92.19%, rgba(255, 255, 255, 0) 100%);
        padding: 10vh 12vw;
    }    

    section p {
        margin: 0;
        font-weight: bold;
        font-size: 24px;
    }

    .image-container {
        position: relative;
        text-align: center;
        color: #fff;
    }

    #lifes {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
        font-size: 130%;
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

    #title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
    }

    #info-container {
        display: flex;
        align-items: center;
        gap: 20px;
    }
</style>