<template>
    <h1 class="title" :class="className">{{ content }}</h1>
    <!-- <h2 class="title__H2">{{ content }}</h2>
    <h3 class="mainText">{{ content }}</h3>
    <h4 class="smallText">{{ content }}</h4>
    <h5 class="smallerText">{{ content }}</h5> -->
</template>


<script setup>
import { computed } from "vue";


const props = defineProps(
    {
        type: String,
        content: String,
    })
// const className = ref(`button ${props.variant === "rounded" ? " -rounded" : ""} ${props.size === "small" ? " -small" : ""}`)
const className = computed(() => ({
    ' -h1': props.type === 'h1',
    ' -h2': props.type === 'h2',
    ' -h3': props.type === 'h3',
    ' -h4': props.type === 'h4',
    ' -h5': props.type === 'h5',
}));


</script>

<style lang="scss" scoped>
.title {
    font-size: $title_size;

    &.-h1{
        font-size: $title_size;  
        font-weight: 700;
    }
    &.-h2{
        font-size: $bigger_font_size;  
        font-weight: 700;
    }
    &.-h3{
        font-size: $big_font_size;  
        font-weight: 700;
    }
    &.-h4{
        font-size: $normal_font_size;  
        font-weight: 700;
    }
    &.-h5{
        font-size: $tiny_font_size;  
        font-weight: 600;
    }
}

</style>