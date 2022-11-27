<template lang="pug">
.press
        .row 
            .item.col-sm-12.col-lg-4.col-md-4(v-for="press in presseshome") 
                .mycard.mt-3
                    .content
                        img(:src="'https://board.humm.world/assets/' + imageavailable(press)" )
                        .news 
                            h3.p-2(style="direction:rtl ; line-height:2.8rem") {{titleavailable(press)}}
                            span
                                img.mb-2(src="@/assets/images/clock.png", alt="").me-2 
                                span {{date(press.date_created_func) }}



</template>

<script lang="ts" setup>


const {data:presses} = await useAsyncGql({
    operation:"presses" , 
    variables : {limit : 3}
})
const presseshome = presses.value.Article
console.log(presseshome)

function imageavailable(item){
    console.log(item.translations[0].cover.id)
    if (item.translations[0]?.title.length >=10){
        return item.translations[0]?.cover?.id
    }
    else
        return item.translations[1]?.cover?.id

}
function titleavailable(item){
    
    if (item.translations[0]?.title?.length >=10){
        return item.translations[0]?.title
    }
    else
        return item.translations[1]?.title

}
function date(item){
    return `${item.year}-${item.month}-${item.day} `
}
</script>

<style lang="scss" scoped>
.mycard{
    transition: all 0.5s ease;
    border: 1px solid black;
    
    cursor: pointer;
    // width: fit-content;
    transition: all 0.3s ease-out;
    &:hover{
        box-shadow: 7px 4px 0 black;
    }
    .content {
        position: relative;
        img{
            width: 100%;

        }
        .news{
            direction: rtl;
            position: absolute;
            z-index: 100;
            bottom: 20px;
            width: 90%;
            left: 50%;
            transform: translatex(-50%);
            background-color: white;
            span{
              
                img{
                    width: 20px;
                }
                color: #777;
        }
        }
    }
}

</style>