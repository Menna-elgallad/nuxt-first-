<template lang="pug">

.container.position-relative
    .intro-bg
    .intro-body 
        slot

    

  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container{
    
    .intro-body{
            display: inline-block;
            background-color: white;
            margin: calc(2.2875rem + 11.96471vw) 0 calc(1.2875rem + 3.49412vw);
    padding: calc(1.1625rem + 2.43529vw) calc(1.1625rem + 2.43529vw);

        }
    .intro-bg{
        background-image: url("https://board.humm.world/assets/dceda803-3aa2-4833-9d88-eaa8c4ea8bd0?fit=cover&width=1550&height=550&quality=80&format=webp");
        background-position: 50% ; 
        background-repeat: no-repeat;
        background-size: cover;
        bottom: 0;
        left: -6.25rem;
        position: absolute;
        top: 0;
        width: calc(100% + 200px);
        z-index: -1;
    }
}
</style>