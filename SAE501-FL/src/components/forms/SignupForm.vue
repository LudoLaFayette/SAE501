<template>
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
    </style>