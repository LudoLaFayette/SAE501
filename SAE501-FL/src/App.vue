<script setup>
import {  RouterView } from 'vue-router';
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import hero from '@/components/layout/hero.vue'

</script>

<template>
  <Header/>
  <hero/>
   <RouterView />
   <Footer/>
</template>

<style scoped>

</style>
