<template>
    <header class="header">
      <div class="logo-container">
        <!-- Placez votre logo ici -->
        <img src="/logo.svg" alt="Logo">
      </div>
      <nav class="navigation">
        <a v-if="!isLoggedIn" href="#signup">S'inscrire</a>
        <a v-if="!isLoggedIn" href="#login">Se connecter</a>
        <button v-if="isLoggedIn" @click="goToProfile">{{ username }}</button>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        isLoggedIn: false,  // Mettez à jour ce statut en fonction de l'état de connexion de l'utilisateur
        username: 'VotreNomUtilisateur'  // Mettez à jour le nom d'utilisateur ici
      }
    },
    methods: {
      goToProfile() {
        // Implémentez la logique pour rediriger vers la page de profil
        this.$router.push('/profile');
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    padding: 10px;
  }
  
  .logo-container img {
    max-width: 100px; /* Ajustez la taille du logo selon vos besoins */
  }
  
  .navigation a, .navigation button {
    color: white;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  /* Autres styles selon vos besoins */
  </style>