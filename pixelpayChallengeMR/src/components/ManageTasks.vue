<script setup>

import ModifyTask from './ModifyTask.vue';
import EliminateTask from './EliminateTask.vue';
const props = defineProps(['tasksList']);
</script>

<template>
    <div class="buttonManagerContainer">
        <ModifyTask :tasksList = "props.tasksList"/>
        <EliminateTask  :tasksList = "props.tasksList"/>
        
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