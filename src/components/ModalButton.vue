<script>
export default {
    name: "ModalButton",
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <div class="container d-flex justify-content-end">
        <button type="button" class="mt-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Invia un messaggio all'host</button>
    </div>
</template>

<style scoped>
button{
    background-color: white;
    padding: 10px 25px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 8px 0 0 black;
    transition: all 0.1s ease-in-out;
}
button:active{
    transform: translateY(10px);
    box-shadow: 0 0 0 0 black;
}
</style>