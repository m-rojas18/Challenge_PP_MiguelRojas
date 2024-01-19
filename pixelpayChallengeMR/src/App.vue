<script setup>

import InputTask from './components/InputTask.vue';
import HeaderMain from './components/HeaderMain.vue';
import TasksList from './components/TasksList.vue';
</script>

<template>
   <HeaderMain/>
    <InputTask/>
    <TasksList/>
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
