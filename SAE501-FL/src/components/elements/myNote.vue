<template>
<div class="myNote">
    <MyIcon v-on:click="onclickFunction" :name="currentIcon">4.9</MyIcon>
    <p>4.9</p>
    <!-- <slot></slot> -->
</div>    
</template>

<script setup>
import MyIcon from './myIcon.vue';

import {ref} from 'vue';

const currentIcon = ref('star');

function onclickFunction() {
    // console.log('ca clique')
    if (currentIcon.value === 'star') {
        // console.log('affiche icone')
        currentIcon.value = 'favori';
    } else {
        currentIcon.value = 'star';
    }
  
}
const props = defineProps(
    {
        name: String,
    })

</script>
<style lang="scss" scoped>
.myNote{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(10);
}
</style>