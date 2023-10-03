<template>
    <div>
        <h1 class="ml-5 mt-5">Me joindre</h1>
        <b-container>
        <form @submit.prevent="submitForm">
            <div class="form-group mt-5">
                <label for="name">Nom :</label>
                <input type="text" id="name" v-model="formData.name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Adresse email :</label>
                <input type="email" id="email" v-model="formData.email" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="message">Message :</label>
                <textarea id="message" v-model="formData.message" class="form-control" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
        </b-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
    name: '',
    email: '',
    message: '',
});

const router = useRouter();

const submitForm = () => {
    const { name, email, message } = formData.value;
    const destinationEmail = 'croissens@yahoo.ca';

    // Envoyez les données du formulaire à votre backend ou effectuez toute autre action nécessaire.
    // Vous pouvez utiliser Axios ou fetch pour cela.

    // Réinitialisez le formulaire après l'envoi
    formData.value.name = '';
    formData.value.email = '';
    formData.value.message = '';

    // Redirigez l'utilisateur ou effectuez une autre action après l'envoi du formulaire
    // Par exemple, vous pouvez rediriger l'utilisateur vers une page de confirmation.
    // router.push('/confirmation');
};
</script>

<style scoped>
/* Styles CSS spécifiques à cette page de contact, si nécessaire */
</style>
