<template>
    <div class="cart">
      <h1 class="cart__title">Panier</h1>
      <ul class="cart__list">
        <li class="cart__item" v-for="n in 4" :key="n">
          <span class="cart__item-number">Panier #{{ n }}</span>
          <span class="cart__item-details">Détails de la montre - Configuration</span>
          <span class="cart__item-price">100€</span>
        </li>
      </ul>
      <div class="cart__pagination">
        <a class="cart__page-link" href="#page1">1</a>
        <a class="cart__page-link" href="#page2">2</a>
        <a class="cart__page-link" href="#page3">3</a>
        <a class="cart__page-link" href="#page4">4</a>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .cart {
    &__title {
      font-weight: bold;
      margin: 2rem 0 2rem 2rem;
    }
  
    &__list {
      list-style: none;
      padding: 0;
      margin: 0;
      border-radius: 10px;
      border: 1px solid #ccc;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
  
      &__item {
        padding: 1rem;
        border-bottom: 1px solid #ccc;
  
        &:last-child {
          border-bottom: none;
        }
      }
  
      &__item-number, &__item-details, &__item-price {
        display: block;
      }
  
      &__item-number {
        font-weight: bold;
      }
    }
  
    &__pagination {
      display: flex;
      justify-content: center;
      margin-top: 2rem;
  
      &__page-link {
        margin: 0 0.5rem;
        text-decoration: none;
        color: blue;
  
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  </style>
  