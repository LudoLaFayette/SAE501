<template>
    <div>
      <form @submit.prevent="login">
        <h1>
            Se connecter :
        </h1>
        <div class="labelclass">
          <label for="email">Email: </label>
          <input type="email" id="email" v-model="credentials.email" required>
        </div>
        <div class="labelclass">
          <label for="password">Mot de passe: </label>
          <input type="password" id="password" v-model="credentials.password" required>
        </div>
        <button type="submit" class="button1">Se connecter</button>
        <button @click="register" class="button2">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        credentials: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      login() {
        // Traitement du formulaire de connexion
        console.log("Connexion avec", this.credentials);
      },
      register() {
        // Redirection vers le formulaire d'inscription
        console.log("Redirection vers le formulaire d'inscription");
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
  .button1{
    background-color: black;
    width: 180px;
    height: 60px;
    border: black 0.1rem solid;
    font-size: 25px;
    color: white;
    margin: 2rem;

  }
  .button2{
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
        label="Se connecter"
      />
    </FormKit>
  </template>
  
  <script>
  export default {
    methods: {
      submitForm(data) {
        // Traitement de la connexion
      }
    }
  }
  </script> -->
  

<!-- <template>
    <FormKit
      id="login-form"
      @submit="handleSubmit"
    >
      <FormKit
        type="email"
        name="utilisateur_email"
        label="Email"
        validation="required|email"
        placeholder="Entrez votre email"
      />
      <FormKit
        type="password"
        name="utilisateur_mdp"
        label="Mot de Passe"
        validation="required"
        placeholder="Entrez votre mot de passe"
      />
      <FormKit type="submit" label="Connexion" />
    </FormKit>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const utilisateurEmail = ref('');
  const utilisateurMdp = ref('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          utilisateur_email: utilisateurEmail.value, 
          utilisateur_mdp: utilisateurMdp.value 
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Connexion réussie:', data);
        // Gérer la connexion réussie ici
      } else {
        console.error('Erreur de connexion:', data.error);
        // Gérer les erreurs de connexion ici
      }
    } catch (error) {
      console.error('Erreur lors de l’envoi des données:', error);
    }
  };
  </script>
   -->