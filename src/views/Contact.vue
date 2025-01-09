<template>
  <div>
    <h1 class="ms-5 mt-5">Me joindre</h1>
    <BContainer>
      <BRow class="mt-5">
        <BCol cols="6">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nom :</label>
              <input id="name" v-model="formData.name" class="form-control" required type="text" />
            </div>
            <div class="form-group">
              <label for="email">Adresse email :</label>
              <input id="email" v-model="formData.email" class="form-control" required type="email" />
            </div>
            <div class="form-group">
              <label for="subject">Sujet :</label>
              <input id="subject" v-model="formData.subject" class="form-control" required type="text" />
            </div>
            <div class="form-group">
              <label for="message">Message :</label>
              <textarea id="message" v-model="formData.message" class="form-control" required></textarea>
            </div>
            <BButton class="mt-3" variant="primary" type="submit">Envoyer</BButton>
          </form>
        </BCol>
        <BCol cols="6">
          <div class="d-flex flex-column text-center">
            <div class="mt-3">
              <a href="tel:+14186277227">
                <i class="bi bi-telephone"></i>
                <span class="ms-2">(418) 627-7227</span>
              </a>
            </div>
            <div class="mt-3 mb-5">
              <a href="mailto:croissens@yahoo.ca">
                <i class="bi bi-envelope"></i>
                <span class="ms-2">croissens@yahoo.ca</span>
              </a>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-around ms-2 me-2">
            <a href="https://www.facebook.com/nathalie.blanchet.334">
              <i class="bi bi-facebook" style="font-size: 2rem;"></i>
            </a>
            <a href="https://web.telegram.org">
              <i class="bi bi-telegram" style="font-size: 2rem;"></i>
            </a>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BContainer, BRow, BCol, BButton } from 'bootstrap-vue-next';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  const { name, email, message } = formData.value;
  const destinationEmail = 'croissens@yahoo.ca';

  formData.value.name = '';
  formData.value.email = '';
  formData.value.subject = '';
  formData.value.message = '';
};
</script>
