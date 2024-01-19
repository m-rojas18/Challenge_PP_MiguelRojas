<!-- Aqui se manejara la logica del agregar una tarea en la pagina -->
<script setup>
import "../assets/mainpage.css"
</script>

<template>
    <form>
        <label>Ingresar nueva tarea: </label>
        <input type="text" placeholder="">
        <button type="button"> Agregar </button>
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