<template lang="pug">
.shows 
    .row
        .item.col-md-6.mt-3(v-for="show in homeshows")
            Card(color="dark" style="height:250px").d-flex
                
                .data.me-3(style="direction:rtl").mt-3
                    h2.fw-bolder.mt-2 {{availabledata(show)}}
                    p.mt-3 {{show.translations[0].description}}
                    span 
                        img(src="@/assets/images/video.png" style="width:20px")
                        span.me-2 {{show.all_episodes_func.count}}
                .img
                    img(:src="'https://board.humm.world/assets/'+ availablesrc(show)")    
                



</template>

<script lang="ts" setup> 
const {data:shows} = await useAsyncGql({
  operation: "Shows"  ,
  variables : {limit : 4}
})
const homeshows = shows.value.shows
console.log(homeshows)
function availabledata(item){
    if (item.translations[0]?.title == null ) {
        console.log("from 1")
        return item.translations[1]?.title
    }
    else{
        console.log("from 2")
        return item.translations[0].title

    }    
}
function availablesrc(item){
    if (item.translations[0]?.cover?.id == null ) {
        console.log("from 1")
        return item.translations[1]?.cover.id
    }
    else{
        console.log("from 2")
        return item.translations[0]?.cover.id

    }    
}

</script>

<style lang="scss" scoped>


.img{
    width: 40%;
    
    img{
        width: 100%;
       height: 100%;
        object-fit: cover;
        object-position: center;
    }

}
.data{
    span{
            img{
                width: 20px;
            }
            color: #ccc;
            font-size: 15px;
        }
    width: 60%;
    flex  : 1 1 auto ;
    p{
        width: 80%;
        font-weight: 800;

    }
}

</style>