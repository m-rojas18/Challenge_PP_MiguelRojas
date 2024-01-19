<!-- Aqui se manejara la logica del agregar una tarea en la pagina -->
<script setup>
import "../assets/mainpage.css"
import {ref} from "vue"
import Swal from 'sweetalert2'

const newDescriptionTask = ref("");
const idLastTask = ref(2);

const props = defineProps(['tasksList']);

const addTask = () => {
    /*Will add method to array and later store it in database*/
    //Ocupara obtener el idLastTask luego al leer de la base
    //Unica validacion de momento es que no este vacio
    
    if(newDescriptionTask.value === ""){
        Swal.fire({
            title: 'Advertencia',
            text: 'No ingreso ninguna tarea.',
            icon: 'warning',
            showConfirmButton: false,
            timer:2000,
            timerProgressBar: true,
        });
    } else {
        const newTask = {id: idLastTask.value + 1, descriptionTask: newDescriptionTask.value, state: false}
        props.tasksList.push(newTask);
        Swal.fire({
            title:"¡Exito!",
            text: 'Se agrego la tarea',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        })
        newDescriptionTask.value = "";
    }
    
}

</script>

<template>
    <form @submit.prevent="addTask">
        <label>Ingresar nueva tarea: </label>
        <input type="text" placeholder="Nueva Tarea..." v-model="newDescriptionTask">
        <button type="button" @click="addTask"> Agregar </button>
    </form>
</template>


<style scoped>

form{
    max-width: 500px;
    margin: 10px auto;
    background: white;
    text-align: left;
    padding: 50px;
    border-radius: 5px;
}

input {
    display: block;
    padding: 10px 6px;
    width:100%;
    border: none;
    color: #555;
    border-bottom: 2px solid #ddd;
}
button{
    margin-top:10px;
    padding:10px 5px;
    border-radius: 5px;
    color: white;
    background-color: #4054f0;
    width: 20%;
    height:10%;
    border:none;
    font-size: 18px;
    
}
</style>