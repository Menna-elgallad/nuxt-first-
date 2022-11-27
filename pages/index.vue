<template lang="pug">
.home
  .section1.mt-2
        Intro  
          h2 A world for food and its lovers
          Cardbutton(color="light").mt-4 Know More
  .section2.main-margin
    .container
      .head.d-flex.justify-content-between
          h2 Food
          Cardbutton(color="light") Show More 
      Food  
  .section3.main-margin
    .container
        Advertisevue(ad="1")
  .section4.main-margin
    .container
        .head.d-flex.justify-content-between
            h2 Articles 
            Cardbutton(color="light") Show More 
        Articles  
  .section5.main-padding2.main-margin
    .container
        .head.d-flex.justify-content-between
            h2 Shows 
            Cardbutton(color="dark") Show More 
        Shows   
  .section6.main-margin
      .container
        Advertisevue(ad="2")
  .section7.main-margin
    .container
      .food-world.d-flex.justfigy-content-between 
        .img 
          img(src="@/assets/images/home1.png")
        .text(style="direction:rtl").mt-5
          h1 عالم الاكل واللي يحبوه     
          p(style="font-size:calc(.9rem + .21176vw);").mt-2 همم هو عالم لكل ما يتعلق بالطعام ونمط الحياة - ستجد هنا كل ما تحتاجه لصنع طعام رائع ، للعثور على هدايا رائعة ، لتدليل نفسك ، وترقية منزلك. يتم استيراد الكثير من منتجاتنا وحزمنا ، لذلك لن تجدها في أي مكان آخر - ترقبوا المزيد والمزيد من المنتجات التي تأتي إلى عالم همم كل يوم ، من جميع أنحاء العالم.              
          Cardbutton(color="light") عن همم            
  .section7.main-margin
    .container
      Subscribe   
  .section7.main-margin
    .container
        .head.d-flex.justify-content-between
            h2 Press 
            Cardbutton(color="light") Show More 
        Press      
  .section8.main-margin
    .container
      .head.d-flex.justify-content-between
          h2 Brands advirtising with us 
          Cardbutton(color="light") Show More 
      Brands       
    .section9.main-margin
      .container
        Advertisevue(ad="3")                        

</template>

<script lang="ts" setup>


</script>

<style lang="scss" scoped>
.section1 {
  overflow: hidden;
  position: relative;
  z-index: 2;

  h2{
        max-width: 300px;
    }
}

.section5{
  background-color: black;
  color: white !important;;
}
.food-world{
  @media (max-width:990px) {
    flex-direction: column;
    .text{
      width: 100% !important;

    }
    .img{
      width: 100% !important;
    }
  }
  .text{
    width: 49%;
    flex: 1 1 auto;
      
    }
  .img{
    width: 49%;
    img{
      width: 100%;
      height: auto;
    }

  }
}
</style>