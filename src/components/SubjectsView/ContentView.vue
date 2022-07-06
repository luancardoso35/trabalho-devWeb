<template>
    <section>
        <div id="title-container">
            <div>
                <p>Disciplinas</p>
            </div>
            <div id="info-container">
                <div class="image-container">
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

        <div id="content-container">
            <SubjectView title="Português" filename="Ellipse2.png" rank="4" total="70"/>
            <SubjectView title="Português" filename="Ellipse2.png" rank="4" total="70"/>
            <SubjectView title="Português" filename="Ellipse2.png" rank="4" total="70"/>
            <SubjectView title="Português" filename="Ellipse2.png" rank="4" total="70"/>
        </div>
    </section>
</template>

<script>
    import db from '../../db.json'
    import SubjectView from '../Subject/SubjectView.vue'

    export default {
    name: "ContentView",
    data() {
        return {
            db,
            progress: db.progress / 100
        };
    },
    components: { SubjectView }
}
</script>

<style scoped>
    section {
        background: linear-gradient(287.56deg, #8ADDDD 0%, #E0EAEA 92.19%, rgba(255, 255, 255, 0) 100%);
        padding: 10vh 10vw;
        height: 70vh;
    }    

    section p {
        margin: 0;
        font-weight: bold;
        font-size: 24px;
    }

    #img-xp {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -60%);
        font-weight: bold;
        color: rgba(93, 93, 93, 1);
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

    #img-start {
        position: absolute;
        top: 50%;
        transform: translate(50%, -60%);
        font-weight: bold;
        color: #000;
        font-size: 130%;
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
        gap: 5vw;
    }

    #content-container { 
        padding: 0 5rem;
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>