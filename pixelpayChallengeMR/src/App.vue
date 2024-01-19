<script setup>

import InputTask from './components/InputTask.vue';
import HeaderMain from './components/HeaderMain.vue';
import ListContainer from './components/ListContainer.vue';
import { ref } from 'vue';

const tasksList = ref([
  {id: 1, descriptionTask: 'Hola mundo', state: false},
  {id: 2, descriptionTask: 'Adios Mundo', state: false}
]);


</script>

<template>
   <HeaderMain/>
    <InputTask :tasksList = "tasksList"/>
    <ListContainer :tasksList="tasksList"/>
</template>

<style >


#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}
body {
  margin: 0;
  background: #eee;
}
</style>
