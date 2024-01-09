<template>
    <div class="c-hero">
            <div class="c-hero_head">
                <p>Bienvenue sur le site des montres</p>
            </div>
            <div class="c-hero_form">
                <form action="">
                    <label for="">Identifiant</label>
                    <input type="text" name="" id="">
                    <label for="">Mot de passe</label>
                    <input type="text" name="" id="">
                </form>
                <div>
                    <button>se connecter</button>
                </div>
            </div>
    </div>
    

</template>
<style lang="scss">
.c-hero{
    display: grid;
    grid-template-columns: 3;

    &_head{
        display: grid;
    };
    &_form{
        display: grid;
    };

}
</style>