<script setup>
import hero from '@/components/layout/hero.vue'
import {onMounted, ref, computed} from 'vue';
import axios from 'axios';
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
const watches = ref([]) 
const boitiers = ref([])
const getWatches = async () => {
    const response = await client.get('/watches')
    return response.data
}
const getBoitiers = async () => {
    const response = await client.get('/boitiers')
    return response.data
}
onMounted(async () =>{ 
    watches.value = await getWatches();
  boitiers.value =  await getBoitiers();
   console.log(watches);
});
</script>

<template>
 <hero/>
</template>
