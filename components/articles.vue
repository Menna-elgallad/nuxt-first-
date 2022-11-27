<template lang="pug">
.articles-sec.row

    .item(v-for="article in homearticles").col-lg-6
        Card(color="light").mt-3 
            .img
                img(:src="'https://board.humm.world/assets/'+  article.translations[0].cover.id")
            .data    
                p.fw-bolder.mt-2 {{article.slug.split('-').join(' ')}}
            .user
   
                span
                    img(src="@/assets/images/clock.png", alt="").me-2 
                    span {{date(article.date_created_func) }}
                span.ms-4
                    img(src="@/assets/images/user.png", alt="").me-2
                    span {{fullname(article)}}


    

</template>

<script setup lang="ts">
const {data:articles} =await useAsyncGql({
    operation : "getarticles" , 
    variables : {limit : 2}
})
const homearticles = articles.value.Article
console.log(homearticles)
function fullname(item){
   return item.user_created.first_name +  " " +  (item.user_created.last_name || "")
}
function date(item){
    return `${item.year}-${item.month}-${item.day} `
}
</script>

<style lang="scss">
  .img{
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        }
  }
  .user{
        span{
            img{
                width: 20px;
            }
            color: #777;
        }
    }
</style>