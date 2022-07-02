<template>
    <div id="background-modal">
        <div id="inner-modal">
            <div id="upper-container">
                <p>
                    Questão {{}} de {{}}
                </p>
                <button class="close-button" @click="close">
                    <img src="../../assets/tests/closeButton.png" alt="close">
                </button>
            </div>
            
            <div id="content-container">
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'QuestionModal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>
    #background-modal{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    #inner-modal{
        margin: 10% 10%;
        vertical-align: middle;
        border-radius: 8px;
    }
    #upper-container{
        display: flex;
        justify-content: space-between;   
        background:#D9D9D9;
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