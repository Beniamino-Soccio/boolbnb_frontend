<script>
import axios from 'axios';
export default {
  name: "ModalButton",
  data() {
    return {
      isModalVisible: false,
      form: {
        sender_name: "",
        sender_last_name: "",
        sender_email: "",
        message: "",
        property_id: "",
      },
      errors: {}, // Per validazione lato client
      serverError: null, // Per eventuali errori lato server
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        sender_name: "",
        sender_last_name: "",
        sender_email: "",
        message: "",
        property_id: "",
      };
      this.errors = {};
      this.serverError = null;
    },
    validateForm() {
      // Reset errori
      this.errors = {};

      // Validazioni
      if (this.form.sender_name.length < 3 || this.form.sender_name.length > 50) {
        this.errors.sender_name = "Name must be between 3 and 50 characters.";
      }
      if (this.form.sender_last_name.length < 3 || this.form.sender_last_name.length > 50) {
        this.errors.sender_last_name = "Last Name must be between 3 and 50 characters.";
      }
      if (this.form.property_id < 1) {
        this.errors.property_id = "Add a valid property ID.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.sender_email)) {
        this.errors.sender_email = "Invalid email format.";
      }
      if (this.form.message.length < 10 || this.form.message.length > 500) {
        this.errors.message = "Message must be between 10 and 500 characters.";
      }

      return Object.keys(this.errors).length === 0; // Form valido se non ci sono errori
    },
    async sendMessage() {
      if (!this.validateForm()) {
        return; // Blocca invio se non valido
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/admin/messages', this.form);
        console.log(response.data);
        this.closeModal();
        alert("Message sent successfully!");
      } catch (error) {
        if (error.response && error.response.data) {
          this.serverError = error.response.data.message || "Failed to send message.";
        } else {
          this.serverError = "An unexpected error occurred.";
        }
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-end m-0">
    <button type="button" class="btnmodal" @click="openModal">
      Send a message to the host!
    </button>
    <div class="modal fade" tabindex="-1" :class="{ show: isModalVisible }"
      :style="isModalVisible ? 'display: block;' : 'display: none;'">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Send a message!</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="sendMessage">
              <div v-if="serverError" class="alert alert-danger">{{ serverError }}</div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" v-model="form.sender_name" :class="{ 'is-invalid': errors.sender_name }" />
                <div class="invalid-feedback" v-if="errors.sender_name">{{ errors.sender_name }}</div>
              </div>
              <div class="mb-3">
                <label for="recipient-last-name" class="col-form-label">Last Name:</label>
                <input type="text" class="form-control" v-model="form.sender_last_name" :class="{ 'is-invalid': errors.sender_last_name }" />
                <div class="invalid-feedback" v-if="errors.sender_last_name">{{ errors.sender_last_name }}</div>
              </div>
              <div class="mb-3">
                <label for="recipient-email" class="col-form-label">E-mail:</label>
                <input type="text" class="form-control" v-model="form.sender_email" :class="{ 'is-invalid': errors.sender_email }" />
                <div class="invalid-feedback" v-if="errors.sender_email">{{ errors.sender_email }}</div>
              </div>
              <div class="mb-3">
                <label for="recipient-property_id" class="col-form-label">Property id:</label>
                <input type="number" class="form-control" v-model="form.property_id"
                  :class="{ 'is-invalid': errors.property_id }" />
                <div class="invalid-feedback" v-if="errors.property_id">
                  {{ errors.property_id }}
                </div>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Message:</label>
                <textarea class="form-control" v-model="form.message"
                  :class="{ 'is-invalid': errors.message }"></textarea>
                <div class="invalid-feedback" v-if="errors.message">
                  {{ errors.message }}
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btnmodal" @click="closeModal">
                  Close
                </button>
                <button type="button" class="btnmodal" @click="sendMessage">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{ show: isModalVisible }" v-if="isModalVisible"></div>
  </div>
</template>

<style scoped>
.btnmodal {
  background-color: white;
  padding: 10px 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  box-shadow: 2px 6px 0 1px #007bff;
  transition: all 0.1s ease-in-out;
  color: black;
}

.btnmodal:active {
  transform: translateY(10px);
  box-shadow: 0 0 0 0 #0046d5;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}

.is-invalid {
  border-color: red;
}

.is-valid {
  border-color: green;
}
</style>
