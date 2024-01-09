<script setup>
import {onMounted, ref, computed} from 'vue';
import axios from 'axios';
const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});
const watches = ref([]) 
const getRecipes = async () => {
    const response = await client.get('/watches')
    return response.data

}
onMounted(async () =>{ 
    watches.value = await getRecipes();
   console.log(watches);
});
</script>

<template>
 <p>welcome</p>
 {{ watches }}
</template>
