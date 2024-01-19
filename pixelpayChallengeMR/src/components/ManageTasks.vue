<script setup>

import ModifyTask from './ModifyTask.vue';
import EliminateTask from './EliminateTask.vue';
const props = defineProps(['tasksList']);

const finishEliminate = () => {
    console.log("Hola");
    console.log(props.tasksList);
    props.tasksList.forEach(element => {
        element = {}
    });
}
</script>

<template>
    <div class="buttonManagerContainer">
        <ModifyTask :tasksList = "props.tasksList" />
        <EliminateTask  :tasksList = "props.tasksList" @activate-Eliminate="finishEliminate"/>
        
    </div>
</template>

<style scoped>
.buttonManagerContainer{
    padding-right: 30%;
    padding-left: 30%;
    display: flex;
    justify-content: space-between;
}
</style>