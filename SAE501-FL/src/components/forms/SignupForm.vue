<template>
    <div>
      <form @submit.prevent="register">
        <h1>
            S'inscrire :
        </h1>
        <div class="labelclass">
          <label for="name">Nom: </label>
          <input type="text" id="name" v-model="user.name" required>
        </div>
        <div class="labelclass">
          <label for="email">Email: </label>
          <input type="email" id="email" v-model="user.email" required>
        </div>
        <div class="labelclass">
          <label for="password">Mot de passe: </label>
          <input type="password" id="password" v-model="user.password" required>
        </div>
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      register() {
        // Traitement du formulaire d'inscription
        console.log("Inscription avec", this.user);
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  h1{
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
  }
  button{
    background-color: black;
    width: 120px;
    height: 60px;
    border: black 0.1rem solid;
    font-size: 25px;
    color: white;
    margin: 2rem;
  }
  .labelclass{
    // padding: 5rem 2rem ;
    margin: 2rem;
  }
</style>
  
<!-- <template>
    <FormKit
      type="form"
      @submit="submitForm"
    >
      <FormKit
        type="email"
        label="Email"
        validation="required|email"
        placeholder="Entrez votre email"
      />
      <FormKit
        type="password"
        label="Mot de passe"
        validation="required"
        placeholder="Entrez votre mot de passe"
      />
      <FormKit
        type="submit"
        label="Connexion"
      />
      <button @click="goToSignUp">S'inscrire</button>
    </FormKit>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm(data) {
        // Traitement de la connexion
      },
      goToSignUp() {
        // Redirection vers la page d'inscription
      }
    }
  }
  </script> -->
  
<!-- <template>
    <FormKit
      type="form"
      @submit="onSubmit"
    >
      <FormKit
        id="utilisateur_email"
        type="email"
        name="email"
        label="Email"
        validation="required|email"
        placeholder="Entrez votre email"
      />
      <FormKit
        id="utilisateur_name"
        type="text"
        name="name"
        label="Nom"
        validation="required"
        placeholder="Entrez votre nom"
      />
      <FormKit
        id="utilisateur_mdp"
        type="password"
        name="password"
        label="Mot de Passe"
        validation="required"
        placeholder="Entrez votre mot de passe"
      />
      <FormKit
        type="submit"
        label="S'inscrire"
      />
    </FormKit>
  </template>
    <script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    
    const utilisateurEmail = ref('');
    const utilisateurName = ref('');
    const utilisateurMdp = ref('');
    
    const onSubmit = async () => {
      const formData = {
        utilisateur_email: utilisateurEmail.value,
        utilisateur_name: utilisateurName.value,
        utilisateur_mdp: utilisateurMdp.value,
      };
    
      try {
        const response = await axios.post('http://localhost:5000/signup', formData);
        console.log(response.data);
        // Gérez la réponse ici, par exemple, afficher un message de succès ou rediriger l'utilisateur
      } catch (error) {
        console.error('Error during signup:', error);
        // Gérez les erreurs ici, par exemple, afficher un message d'erreur
      }
    };
    </script>
    <style lang="scss">
    </style> -->