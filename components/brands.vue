<template lang="pug">
.brands 
        .row.mt-3 
            .col(v-for="brand in brands")
                img(:src="'https://board.humm.world/assets/'+ brand.directus_files_id.id")


</template>

<script lang="ts" setup>
const {data:brand}= await useAsyncGql({
    operation:"brands"
})
const brands = brand.value.homepage_translations[1].brands_list
 
console.log("brands" , brands)
</script>

<style lang="scss" scoped>
.col{
    min-width: 6.25rem;
    flex: auto;
    border: 1px solid black;
    width: auto;
    display: flex;
    align-items: center;
    padding: 1rem;
    img{
        width: 90px;
        margin: auto;
    }
}
</style>