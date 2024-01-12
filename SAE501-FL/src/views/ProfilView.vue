<template>
    <div class="profile">
      <div class="profile__header">
        <img class="profile__avatar" src="/logo.svg" alt="Profil" />
        <h1 class="profile__name">Admin01</h1>        
      </div>
      <div class="profile__info">
        <p class="profile__bio">Bienvenue sur votre profil, créateur de montres</p>
        <ul class="profile__stats">
          <li class="profile__stats-item">Panier: 1</li>
          <li class="profile__stats-item">Montres commandées: 2</li>
          <li class="profile__stats-item">Prix: 300€</li>
        </ul>
      </div>
      <div class="profile__link">
        <p>Lien vers le panier : <a href="/panier">Panier de l'user XXX000...</a></p>        
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .profile {
    &__header {
      text-align: center;
      margin-bottom: 20px;
    }
  
    &__avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  
    &__name {
      font-size: 24px;
      font-weight: bold;
    }
  
    &__info {
      &__bio {
        margin-bottom: 15px;
      }
  
      &__stats {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-around;
  
        &-item {
          font-weight: bold;
        }
      }
    }
  
    &__link {
      a{
        text-decoration: none;
        color: black;
      }
    }
  }
  </style>
  