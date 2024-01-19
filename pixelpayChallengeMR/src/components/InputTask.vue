<!-- Aqui se manejara la logica del agregar una tarea en la pagina -->
<script setup>
</script>

<template>
    <form>
        <label>Ingresar nueva tarea: </label>
        <input type="text">
        <button> Agregar </button>
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
label{
    font-size:1em;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight:bold;
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
}
</style>