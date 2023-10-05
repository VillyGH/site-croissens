<template>
  <div>
    <h1 class="ml-5 mt-5">Me joindre</h1>
    <b-container>
      <b-row class="mt-5">
        <b-col cols="6">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Nom :</label>
              <input id="name" v-model="formData.name" class="form-control" required type="text">
            </div>
            <div class="form-group">
              <label for="email">Adresse email :</label>
              <input id="email" v-model="formData.email" class="form-control" required type="email">
            </div>
            <div class="form-group">
              <label for="email">Sujet :</label>
              <input id="email" v-model="formData.subject" class="form-control" required type="text">
            </div>
            <div class="form-group">
              <label for="message">Message :</label>
              <textarea id="message" v-model="formData.message" class="form-control" required></textarea>
            </div>
            <button class="btn btn-primary" type="submit">Envoyer</button>
          </form>
        </b-col>
        <b-col cols="6">
          <div class="d-flex flex-column text-center">
            <div class="mt-3">
              <a href="tel:+14186277227">
                <b-icon-telephone/>
                <sp class="ml-5">(418) 627-7227</sp>
              </a>
            </div>
            <div class="mt-3 mb-5">
              <a href="tel:+14186277227">
                <b-icon-envelope/>
                <sp class="ml-5">croissens@yahoo.ca</sp>
              </a>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-around ml-2 mr-2">
            <a href="https://www.facebook.com/nathalie.blanchet.334">
              <b-icon-facebook scale="2"/>
            </a>
            <a href="https://web.telegram.org">
              <b-icon-telegram scale="2"/>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  const {name, email, message} = formData.value;
  const destinationEmail = 'croissens@yahoo.ca';

  formData.value.name = '';
  formData.value.email = '';
  formData.value.email = '';
  formData.value.message = '';
};
</script>
