<template>
    <div v-for="watch in watches">
                <Watch v-bind="{ boitier_shape:watch.boitier_shape, fond:watch.fond,bracelet_tissu:watch.bracelet_tissu }" />
            </div>
    <Watch></Watch>
    </template>
    <script setup>
    import Watch from '@/components/ThreeComponents/Watch.vue'
    import {onMounted, ref} from 'vue';
    import axios from 'axios';
    const client = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
    });
    const watches = ref([]) 
    const boitiers = ref([])
    const details = ref([])
    const getWatches = async () => {
        const response = await client.get('/watches')
        return response.data
    }
    const getBoitiers = async () => {
        const response = await client.get('/boitiers')
        return response.data
    }
    const getDetails = async () => {
        const response = await client.get('/watch-price/:watchId')
        return response.data
    }
    onMounted(async () =>{ 
        watches.value = await getWatches();
      boitiers.value =  await getBoitiers();
      details.value =  await getDetails();
       console.log(watches);
    });
    </script>
    <style lang="scss">
    </style>