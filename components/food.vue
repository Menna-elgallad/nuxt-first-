<template lang="pug">
.food
    .row
        .item.col-lg-3.col-sm-6.mt-3(v-for="item in food") 
            Card(color="light")
                .img
                    img(:src="'https://board.humm.world/assets/'+ srcavailable(item) ")
                .data    
                    span.rounded-pill.border.border-dark.p-2.mt-2.d-inline-block.px-3 {{item.category.slug.split('-').join(" ")}}
                    p.fw-bolder.mt-2 {{item.slug.split('-').join(' ')}}
                    
                .user
                    p 
                        img(src="@/assets/images/user.png", alt="").me-2
                        span {{fullname(item)}}
                    p 
                        img(src="@/assets/images/clock.png", alt="").me-2 
                        span {{date(item.date_created)}}



</template>

<script setup lang="ts">


const { data } = await useAsyncGql({
    operation: 'getfood' 
    
});
const food = data.value?.Article;
function date(str){
    let char = "" ; 
    for (let i = 0 ; i < str.length ; i++){
        if (str[i] === "T"){
            break
        }
        char += str[i]
    }
    return char
}

console.log(food[0].date_created)
// const src = computed(()=> `https://board.humm.world/assets/${item.category.translation[0].cover.id}`)
function srcavailable(item){
    if (item.category.translations[0].cover?.id == null ) {
        console.log("from 1")
        return item.category.translations[1].cover.id 
     
    }
    else{
        console.log("from 2")
        return item.category.translations[0].cover?.id

    }    
}
function fullname(item){
   return item.category.user_created.first_name +  " " +  item.category.user_created.last_name
}
</script>

<style lang="scss" scoped>
.item{
    p {
            margin: 0;
        }
    .img{
  
        img{
           width: 100%;
           height: 200px;
            object-fit: cover;
    }
    }
    .rounded-pill{
        &:hover{
            background-color: black;
            color: white;
        }
    }
    .user{
        p{
            img{
                width: 20px;
            }
            color: #777;

        }
    }

}
</style>