<script>
export default {
    name: "ModalButton",
  data() {
    return {
        isModalVisible: false,
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>

<template>
    <div class="container d-flex justify-content-end">
        <button type="button" class="mt-5 btnmodal" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="openModal">Invia un messaggio all'host</button>
        <div class="modal fade" tabindex="-1" :class="{ show: isModalVisible }" :style="isModalVisible ? 'display: block;' : 'display: none;'" @click="closeModal">
            <div class="modal-dialog modal-dialog-centered" @click.stop>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Invia un messaggio!</h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">Last Name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">E-mail:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="button" class="btnmodal" @click="closeModal">Close</button>
                            <button type="button" class="btnmodal">Send message</button>
                        </div>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="closeModal">Chiudi</button>
                    </div> -->
                </div>
            </div>
        </div>
    </div>

<div class="modal-backdrop fade" :class="{ show: isModalVisible }" v-if="isModalVisible"></div>

</template>

<style scoped>
.btnmodal{
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
.btnmodal:active{
    transform: translateY(10px);
    box-shadow: 0 0 0 0 black;
}
body {
  overflow: hidden; /* Previene lo scroll quando la modale è aperta */
}
</style>