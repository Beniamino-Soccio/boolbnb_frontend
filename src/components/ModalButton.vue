<script>
import axios from 'axios';
export default {
  name: "ModalButton",
  data() {
    return {
      isModalVisible: false,
      form: {
        name: "",
        lastName: "",
        email: "",
        message: "",
      },
      errors: {
        name: null,
        lastName: null,
        email: null,
        message: null,
      },
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
    sendMessage() {
      axios.post('http://127.0.0.1:8000/api/messages', this.form)
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    validateForm() {
      // Reset errors
      this.errors = {
        name: null,
        lastName: null,
        email: null,
        message: null,
      };

      let isValid = true;

      // Validate Name
      if (!this.form.name.trim()) {
        this.errors.name = "Name is required.";
        isValid = false;
      }
      if (this.form.name.length < 3) {
        this.errors.name = "Name must have at least 3 characters"
      }

      // Validate Last Name
      if (!this.form.lastName.trim()) {
        this.errors.lastName = "Last Name is required.";
        isValid = false;
      }
      if (this.form.name.length < 2) {
        this.errors.name = "Last name must have at least 2  characters"
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim()) {
        this.errors.email = "E-mail is required.";
        isValid = false;
      } else if (!emailRegex.test(this.form.email)) {
        this.errors.email = "Invalid E-mail format.";
        isValid = false;
      }

      // Validate Message
      if (!this.form.message.trim()) {
        this.errors.message = "Message is required.";
        isValid = false;
      }

      if (isValid) {
        alert("Message sent successfully!");
        this.closeModal();
      }
    },
    resetForm() {
      this.form = {
        name: "",
        lastName: "",
        email: "",
        message: "",
      };
      this.errors = {
        name: null,
        lastName: null,
        email: null,
        message: null,
      };
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-end m-0">
    <button type="button" class="btnmodal" @click="openModal">
      Sends a message to the host!
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
            <form @submit.prevent="validateForm">
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Name:</label>
                <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid': errors.name }" />
                <div class="invalid-feedback" v-if="errors.name">
                  {{ errors.name }}
                </div>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Last Name:</label>
                <input type="text" class="form-control" v-model="form.lastName"
                  :class="{ 'is-invalid': errors.lastName }" />
                <div class="invalid-feedback" v-if="errors.lastName">
                  {{ errors.lastName }}
                </div>
              </div>
              <div class="mb-3">
                <label for="recipient-email" class="col-form-label">E-mail:</label>
                <input type="email" class="form-control" v-model="form.email" :class="{ 'is-invalid': errors.email }" />
                <div class="invalid-feedback" v-if="errors.email">
                  {{ errors.email }}
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
                <button type="submit" class="btnmodal" @click="sendMessage">
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
  box-shadow: 0 8px 0 0 #007bff;
  transition: all 0.1s ease-in-out;
  color: black;
}

.btnmodal:active {
  transform: translateY(10px);
  box-shadow: 0 0 0 0 #0046d5;
}

.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
}
</style>
