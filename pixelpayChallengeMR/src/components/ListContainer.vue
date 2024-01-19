<script setup>
import '../assets/mainpage.css'

import { defineProps } from 'vue';

const props = defineProps(['tasksList']);
</script>
<template>
    <div class="containerList">
        <!-- Logica de recorrer elementos y listar elementos -->
        <label>Tareas</label>
        <ul>
            <li v-for="task in props.tasksList" :key = "task.id">
                <p class="descriptionOfTask">{{ task.descriptionTask }}</p> 
                <input type="checkbox" v-model="task.state" class="checkboxTask"/>
            </li>
        </ul>
        
    </div>
</template>


<style scoped>

.containerList{
    max-width: 500px;
    margin: 20px auto;
    background: white;
    text-align: left;
    padding: 50px;
    border-radius: 10px;
    height: 200px;
    max-height: 200px;
    overflow: auto;
}

ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
    overflow: auto;
}

li {
    border: 2px solid #4054f0;
    border-radius: 5px;
    display: flex;
    margin:5px auto;
    max-width: 100%;
    align-items: center;
}

.descriptionOfTask{
    flex: 8;
    padding-left: 10px;
}
.checkboxTask{
    flex: 2;
    padding: 5px;
    height: 20px;
    width: 20px;
}



</style>