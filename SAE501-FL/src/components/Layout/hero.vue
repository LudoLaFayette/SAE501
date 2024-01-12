<script setup>
import SignupForm from '../forms/SignupForm.vue';
import LoginForm from '../forms/LoginForm.vue';

</script>
<template>
    <div class="c-hero">
            <div class="c-hero_head">
                <p>Bienvenue sur le site des montres :</p>
                <a href="customisation">Personaliser</a>
                <a href="profil">Test Profil</a>
                <a href="panier">Panier</a>
            </div>
            <div class="c-hero_form">
                <LoginForm></LoginForm>
                <SignupForm></SignupForm>                
            </div>
    </div>
    

</template>
<style lang="scss">
.c-hero{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &_head{
        display: grid;
        grid-template-rows: repeat(4,1fr);
        gap: 1rem;
        color: white;
        background-color: black;
        text-align: center;
        align-items: center;
    };
    &_form{
        display: grid;
        grid-template-rows: repeat(2,1fr)
    };
    a{
        text-decoration: none;
        color: white;
        font-weight: bold;
    }

}
</style>