<template>
    <section>
        <TopContentView title="Disciplinas"/>
        <div id="content-container">
            <SubjectView title="Matemática" filename="EllipseMat.png" rank="1" total="70"/>
            <SubjectView title="Física" filename="EllipsePhysics.png" rank="40" total="70"/>
            <SubjectView title="Química" filename="EllipseQuimica.png" rank="44" total="70"/>
            <SubjectView title="Português" filename="EllipsePort.png" rank="5" total="70"/>
        </div>
    </section>
</template>

<script>
    import db from '../../db.json'
    import SubjectView from '../Subject/SubjectView.vue'
    import TopContentView from '../TopContentInfo/TopContentView.vue';
    export default {
    name: "ContentView",
    data() {
        return {
            db,
            progress: db.progress / 100
        };
    },
    components: { SubjectView, TopContentView }
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

    .center {
        width: calc(126px * v-bind(progress));
        height: 19px;
        background:#FABE2C;
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translateY(-60%);
    }

    span {
        position: absolute;
        top: 0;
        left: 0;
    }

    #content-container { 
        padding: 0 5rem;
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>