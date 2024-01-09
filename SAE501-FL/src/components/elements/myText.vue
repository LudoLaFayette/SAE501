<template>
    <p class="text" :class="className">{{ content }}</p>
    <!-- <h2 class="title__H2">{{ content }}</h2>
    <h3 class="mainText">{{ content }}</h3>
    <h4 class="smallText">{{ content }}</h4>
    <h5 class="smallerText">{{ content }}</h5> -->
</template>


<script setup>

import { computed } from "vue";


const props = defineProps(
    {
        size: String,
        content: String,
    })
// const className = ref(`button ${props.variant === "rounded" ? " -rounded" : ""} ${props.size === "small" ? " -small" : ""}`)
const className = computed(() => ({
    ' -p1': props.size === 'p1',
    ' -p2': props.size === 'p2',
    
}));


</script>

<style lang="scss" scoped>
.text {
    font-size: $tiny_font_size;

    &.-p1{
        font-size: $tiny_font_size;  
        font-weight: 400;
    }
    &.-p2{
        font-size:$very_tiny_font_size;  
        font-weight: 400;
    }
}

;
</style>