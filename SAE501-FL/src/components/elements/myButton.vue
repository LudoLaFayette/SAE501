<script setup>
import { computed } from "vue";
import myIcon from "./myIcon.vue";

const props = defineProps(
    {
        text: String,
        link: String,
        size: String,
        variant: String,
        hasIcon: Boolean,
    
    })

const className = computed(() => ({
    ' -rounded': props.variant === 'rounded',
    ' -small': props.size === 'small',
    ' -verySmall': props.size === 'verySmall',
    ' -isIcon' : props.hasIcon ===  true
}));


</script>

<template>
    <a v-if="link"  :class="className" :href="link" class="button">
        <slot></slot>
    </a>
    <button v-else :class="className" class="button">
        <slot></slot>
        <myIcon v-if="hasIcon" name="chevronRight" background="backgroundArrowTonWBkrd" size="smallIcon"></myIcon>
    </button>
</template>

<style lang="scss" scoped>
// @import '../../../scss/foundations/variables';
.button {
    align-items: center;
    background-color: $primary-color;
    background: linear-gradient(180deg, $secondary-color 0%, $primary-color 100%);
    border: none;
    border-radius: rem(15);
    box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
    color: $white;    
    font-family: $primary-font-familly;
    font-size: $tiny_font_size;
    font-weight: 600;
    padding: rem(33) rem(67);
    text-decoration: none;
    word-wrap: break-word;

    &.-isIcon {
        display: inline-flex;
        gap: rem(15);
    }

    &.-rounded {
        background: $primary-color;
        border-radius: rem(37);
        padding: rem(20) rem(50);
        font-weight: 500;
        
    }

    &.-small {
        background: $primary-color;
        font-size: $tiny_font_size;
        padding: rem(10) rem(20);
        font-weight: 400;
    }

    &.-verySmall {
        background: $primary-color;
        font-size: $very_tiny_font_size;
        padding: rem(14) rem(29);
        font-weight: 200;
    }
}
</style>