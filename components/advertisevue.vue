<template lang="pug">
.banner(v-if="ad==='1'") 
    img(:src="'https://board.humm.world/assets/' + banner1.id")
.banner2(v-if="ad==='2'").d-flex.justify-content-between
    img(:src="'https://board.humm.world/assets/' + banner2.id")
    img(:src="'https://board.humm.world/assets/' + banner3.id")
.banner3(v-if="ad==='3'").d-flex.justify-content-between
    img(:src="'https://board.humm.world/assets/' + banner4.id")

</template>

<script lang="ts" setup>
const props = defineProps({
    ad : String
})
    const {
        data: posters
    } = await useAsyncGql({
        operation: "posters"

    });
    const advposters = posters.value.posters.translations[1]
    console.log(advposters)
    const banner1 = {
        id: advposters.wide_cover.id,
        title: advposters.wide_title,
        url: advposters.wide_url
    };
    const banner2 = {
        id: advposters.normal2_cover.id,
        title: advposters.normal2_title,
        url: advposters.normal2_url
    };
    const banner3 = {
        id: advposters.normal_cover.id,
        title: advposters.normal_title,
        url: advposters.normal_url
    };
    const banner4 = {
        id: advposters.wide2_cover.id,
        title: advposters.wide2_title,
        url: advposters.wide2_url
    };
</script>

<style lang="scss" scoped>

  
  .banner ,.banner3{
    img{
    
      height: auto;
      width: 100%;
 
    }
  }
  .banner2{
    img{
        height: auto;
        width: 49%;
    }

  }

</style>