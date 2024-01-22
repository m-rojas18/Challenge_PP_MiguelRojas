<script setup>
import "../assets/mainpage.css"
import Swal from "sweetalert2";

const props = defineProps(['tasksList']);
const emit = defineEmits(['activate-Eliminate']);

const handleEliminateTasks = (e) => {
    //Mostrar Pop up de eliminacion, dar opcion a usuario de cancelar y elimninar el arreglo segun decision

    let titleEliminate = "";
    let textConfirmedEliminate = ""
    if(e.target.id == "be1"){   
         //Activar strings para caso de eliminar todo.
        titleEliminate = "¿Eliminar todas las tareas?";
        textConfirmedEliminate = "Todas las tareas se han elimado";
    } else {
        titleEliminate = "¿Eliminar todas las tareas completadas?";
        textConfirmedEliminate = "Todas las tareas completadas se han elimado";
    }

    Swal.fire({
        title: titleEliminate,
        text: "No se podran revertir los cambios.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar.",
        cancelButtonText: "Cancelar"
    }).then((result) => {
    if (result.isConfirmed) {

        Swal.fire({
        title: "Eliminados",
        text: textConfirmedEliminate,
        icon: "success"
        });
    }
    if(e.target.id === "be1"){
            //Eliminar todos
            avisoEliminar(e.target.id);
            props.tasksList = [];
        }
    });
}


const avisoEliminar =(eliminateAction) => {
    emit('activate-Eliminate', eliminateAction);
}

</script>
<template>
    <button type="button" @click="handleEliminateTasks" class="buttonChallenge" id="be1">Eliminar todo</button>
    <button type="button" @click="handleEliminateTasks" class="buttonChallenge" id="be2">Eliminar marcados</button>
</template>

<script>
    export const emits = ['activateEliminate'];
</script>
<style>
</style>