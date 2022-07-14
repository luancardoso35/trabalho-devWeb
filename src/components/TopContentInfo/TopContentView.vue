<template>
        <div id="title-container">
            <div>
                <p>{{title}}</p>
            </div>
            <div id="info-container">
                <div class="level image-container">
                    <img src="../../assets/subjects/progress.png"/>
                    <div id="img-start">{{db.currentLevel}}</div>
                    <div id="img-end">{{db.currentLevel+1}}</div>
                    <div id="img-xp">{{db.progress}} XP</div>
                    <div class="center"></div>
                </div>
                <div class="image-container">
                    <img src="../../assets/subjects/heart.png">
                    <span id="lifes">{{db.lifes}}</span>
                </div>
            </div>    
        </div>
</template>

<script>
    import db from '../../db.json'

    export default {
        name: "TopContentView",
        props: ["title"],
        data() {
            return {
                db,
                progress: db.progress / 100
            }
        }
    }

</script>

<style scoped>
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
        margin: 0;
        font-weight: bold;
        font-size: 24px;
    }

    #info-container {
        display: flex;
        align-items: center;
        gap: 5vw;
    }

    .image-container {
        position: relative;
        text-align: center;
        color: #fff;
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
        transform: translate(30%, -60%);
        font-weight: bold;
        color: #000;
    }

    #img-end {
        position: absolute;
        top: 50%;
        left: 95%;
        transform: translate(-90%, -60%);
        font-weight: bold;
        color: #000;
    }

    #lifes {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-weight: bold;
    }

</style>