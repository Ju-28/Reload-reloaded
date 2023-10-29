<template>
  <div class="page-contact">
    <h1 class="contact-headline">CONTACT</h1>
    <div class="form-wrapper">
      <form @submit.prevent="sendEmail">
        <ul class="form-style-1">
          <li>
            <label>Full Name <span class="required">*</span></label>
            <input type="text" v-model="first_name" name="first_name" class="field-divided" placeholder="First" />
            <input type="text" v-model="last_name" name="last_name" class="field-divided" placeholder="Last" />
          </li>
          <li>
            <label>Email <span class="required">*</span></label>
            <input type="email" v-model="email" name="email" class="field-long" placeholder="Email"/>
          </li>
          <li>
            <label>Your Message <span class="required">*</span></label>
            <textarea v-model="message" name="message" id="field5" class="field-long field-textarea" placeholder="Your message"></textarea>
          </li>
          <li>
            <button class="submit-form" :disabled="isSubmitting" :class="{ 'is-disabled': isSubmitting }">
              {{ isSubmitting ? 'Please Wait...' : 'Submit' }}
            </button>
            <div v-if="showError" class="error-message">{{ errorMessage }}</div>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kontakt',
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      isSubmitting: false,
      showError: false,
      errorMessage: '',
    };
  },
  mounted() {
    document.title = 'Kontakt | RELOAD'
  },
  methods: {
    sendEmail() {
      // Prevent multiple submissions
      if (this.isSubmitting) {
        this.showAlert('Please wait before submitting again.');
        return;
      }

      // Check for empty fields
      if (this.first_name === "" || this.last_name === "" || this.email === "" || this.message === "") {
        this.showError = true;
        this.errorMessage = "Please fill out all fields.";
        return;
      }

      // Check for valid email
      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(this.email)) {
        this.showError = true;
        this.errorMessage = "Please enter a valid email address.";
        return;
      }

      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        message: this.message,
      };

      this.isSubmitting = true;

      // Send email using an API endpoint
      fetch("http://192.168.178.133:8000/api/v1/contact/", { // Please change IP4 adress to your local network for development and testing.
        method: "POST", // Set the method to "POST"             For production please use the real server's adress
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.showAlert('Your email has been sent. We will get back to you as soon as possible.', () => {
            this.clearForm();
            this.showError = false;
            this.errorMessage = '';
          });
        })
        .catch(error => {
          console.error(error);
          this.showAlert('An error occurred. Please try again.');
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
    clearForm() {
      this.first_name = '';
      this.last_name = '';
      this.email = '';
      this.message = '';
    },
    showAlert(message, callback) {
      if (confirm(message)) {
        if (typeof callback === 'function') {
          callback();
        }
      }
    },
  },
};
</script>

<style>
  .submit-form {
    background-color: #4691A4;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 3rem;
  }

  .submit-form:hover:not(.is-disabled) {
    background-color: #4691a4ad;
  }

  .is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
