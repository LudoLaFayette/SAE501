<template>
    <i class="icon" :class="className">
        <component :is="getIcon" class="icon__" />
    </i>
</template>

<script setup>
import { computed } from 'vue';

import iconCommunity from '../icons/iconCommunity.vue';
import iconDocumentation from '../icons/iconDocumentation.vue';
import iconEcosystem from '../icons/iconEcosystem.vue';
import iconTooling from '../icons/iconTooling.vue';
import iconSupport from '../icons/iconSupport.Vue';

//Icones du projet
import iconArrowLeft from '../icons/iconArrowLeft.vue';
import iconArrowRight from '../icons/iconArrowRight.vue';
import iconChrevronLeft from '../icons/iconChrevronLeft.vue';
import iconDeliveryTruck from '../icons/iconDeliveryTruck.vue';
import iconFacebook from '../icons/iconFacebook.vue';
import iconHour from '../icons/iconHour.vue';
import iconInstagram from '../icons/iconInstagram.vue';
import iconLinkedin from '../icons/iconLinkedin.vue';
import iconMapPin from '../icons/iconMapPin.vue';
import iconPhoneCall from '../icons/iconPhoneCall.vue';
import iconPlay from '../icons/iconPlay.vue';
import iconSearch from '../icons/iconSearch.vue';
import iconShoppingBag from '../icons/iconShoppingBag.vue';
import iconStar from '../icons/iconStar.Vue';
import iconTwitter from '../icons/iconTwitter.vue';
import iconUstensils from '../icons/iconUstensils.vue';
import iconUstensilsCrossed from '../icons/iconUstensilsCrossed.vue';
import iconStarTangerine from '../icons/iconStarTangerine.vue'
import iconChevronRight from '../icons/iconChevronRight.vue';

const props = defineProps({
    name: String,
    background: String,
    size: String,
})

const getIcon = computed(() => {
    switch (props.name) {
    case 'community':
        return iconCommunity;
    case 'documentation':
        return iconDocumentation;
    case 'ecosystem':
        return iconEcosystem;
    case 'tooling':
        return iconTooling;
    case 'arrowLeft':
        return iconArrowLeft;
    case 'arrowRight':
        return iconArrowRight
    case 'chevronLeft':
        return iconChrevronLeft;
    case 'deliveryTruck':
        return iconDeliveryTruck;
    case 'facebook':
        return iconFacebook;
    case 'hour':
        return iconHour;
    case 'instagram':
        return iconInstagram;
    case 'linkedin':
        return iconLinkedin
    case 'mapPin':
        return iconMapPin
    case 'phoneCall':
        return iconPhoneCall
    case 'play':
        return iconPlay
    case 'search':
        return iconSearch
    case 'shoppingBag':
        return iconShoppingBag
    case 'star':
        return iconStar;
    case 'twitter':
        return iconTwitter
    case 'ustensils':
        return iconUstensils
    case 'ustensilsCrossed':
        return iconUstensilsCrossed
    case 'favori':
        return iconStarTangerine
    case 'chevronRight':
        return iconChevronRight
    default:
        return iconSupport
    }
})
const className = computed(() => ({
    ' -backgroundW': props.background === 'backgroundW',
    ' -backgroundBCK': props.background === 'backgroundBCK',
    ' -backgroundT': props.background === 'backgroundT',
    ' -backgroundTT': props.background === 'backgroundTT',
    ' -backgroundPlay': props.background === 'backgroundPlay',
    ' -backgroundArrowTonWBkrd': props.background === 'backgroundArrowTonWBkrd',
    ' -smallIcon': props.size === 'smallIcon',
    ' -bigIcon': props.size === 'bigIcon'
}));
</script>

<style lang="scss" scoped>
.icon {
    display: inline-flex;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0 0 25px rgba(131, 165, 255, 0.25);
    height: rem(50);
    width: rem(50);
    justify-content: center;

    &.-backgroundW {
        background-color: $white;
        color: black;
        svg{
            fill: none;
        }
        
    }
    &.-backgroundArrowTonWBkrd {
        background-color: $white;
        color: $primary-color;
        svg{
            fill: none;
        }
        
    }
    &.-backgroundPlay {
        background-color: $white;
        color: $primary-color;
        svg{
            fill: $primary-color;
        }
        
    }



    &.-backgroundBCK {
        background-color: $black;
        color: white;
        svg{
            fill: none;
        }
        
    }



    &.-backgroundT {
        background-color: $primary-color;
        color: white;

        svg{
            fill: none;
        }
    }

    &.-backgroundTT {
        background-color: #F5DDC4;
        color: $primary-color;
        fill: $primary-color;
    }

    &.-smallIcon {
        height: rem(50);
        width: rem(50);

        svg {
            scale: 1.10;
        }
    }

    &.-bigIcon {

        height: rem(120);
        width: rem(120);

        svg {
            scale: 2.75 ;
        }
    }




}
</style>