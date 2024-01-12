<template>
    <div class="v-watch">
        <div class="v-watch_canvas">
            <Watch></Watch>
        </div>
        <div>
            <h1>Personalisation : </h1>
            <h1>Boitier Choix : </h1>
            <select v-model="selectedBoitier">
                <option v-for="boitier in boitiers" :key="boitier.boitier_id" :value="boitier.boitier_id">{{ boitier.boitier_name }}</option>
            </select>
            <h1>Bracelet Choix : </h1>
            <select v-model="selectedBracelet">
                <option v-for="bracelet in bracelets" :key="bracelet.braceletid" :value="bracelet.bracelet_id">{{ bracelet.bracelet_name }}</option>
            </select>
            <h1>Pierres Choix : </h1>
            <select v-model="selectedPierre">
                <option v-for="pierre in pierres" :key="pierre.pierres_id" :value="pierre.pierres_id">{{ pierre.pierres_name }}</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import Watch from '@/components/ThreeComponents/Watch.vue'
import axios from 'axios';
import { onMounted,ref } from 'vue';

const boitiers = ref([]);
const bracelets = ref([]);
const pierres = ref([]);

const selectedBoitier = ref('');
const selectedBracelet = ref('');
const selectedPierre = ref('');

onMounted(async () => {
    boitiers.value = (await axios.get('/boitiers')).data;
    bracelets.value = (await axios.get('/bracelet')).data;
    pierres.value = (await axios.get('/pierres')).data;
});
</script>

<style lang="scss" scoped>
.watch{
    width : 500px;
}
h1{
    font-weight: bold;
    margin-top: 2rem;
    margin-left: 2rem;
  }

</style>