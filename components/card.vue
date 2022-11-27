<template lang="pug">
.mycard(:class="[color]")
    slot
    
</template>

<script setup lang="ts">
const props = defineProps({
    color: String
})

</script>

<style lang="scss" scoped>
.mycard{
    transition: all 0.5s ease;

    &.light{
        border: 1px solid black;
        padding: 1.2rem;
        cursor: pointer;
        // width: fit-content;
        transition: all 0.3s ease-out;
        &:hover{
            box-shadow: 7px 4px 0 black;
        }
    }
    &.dark{
        border: 1px solid white;
        padding: 1.2rem;
        cursor: pointer;
        // width: fit-content;
        transition: all 0.3s ease-out;
        &:hover{
            box-shadow: 7px 4px 0 white;
        }
    }
    &.static{
        border: 1px solid black;
        padding: 1.2rem;
        cursor: pointer;
        box-shadow: 7px 4px 0 black;
        
    }
    

}

</style>