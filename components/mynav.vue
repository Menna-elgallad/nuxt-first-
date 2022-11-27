<template lang="pug">
.header
  .nav.py-4.large.position-relative
      .container.d-flex.justify-content-between.align-items-center.position-relative
          .logo.d-flex.justify-content-between.align-items-center
              div.d-flex.align-items-center
                  img(src="@/assets/images/logo.svg")
              
                  
          .links.d-flex 
              ul.d-flex.justify-content-between(style="gap:5px")
                  li.px-4: nuxt-link(to="/subscribe"): .circ: img(src="@/assets/images/email.svg")
                  li.px-4: nuxt-link(to="/cart"): .circ: img(src="@/assets/images/cart.svg")     
                  li.px-4: .circ EN
          .end    
             
              Cardbutton(color="light") Contact us 
             
  .sidemenu
    transition(name="side")
        Sidenav(v-if="menu" @close="renderside()")
    .container.d-flex.align-items-center.py-3.justify-content-between
 
      .links.d-flex
        nuxt-link(to="#" @click="renderside()").me-4
                img(src="@/assets/images/menu.svg", alt="alt" style="width:30px") 
                span.ms-2 Menu  
        .rest
            nuxt-link(to="/food").ms-5.me-4
              img(src="@/assets/images/Food.svg", alt="alt" style="width:30px") 
              span.ms-2 Food 
            nuxt-link(to="/food").ms-5.me-4
              img(src="@/assets/images/show.svg", alt="alt") 
              span.ms-2 Shows 
            nuxt-link(to="/food").ms-5.me-4
              img(src="@/assets/images/read.svg", alt="alt") 
              span.ms-2 Read    
            nuxt-link(to="/food").ms-5.me-4
              img(src="@/assets/images/shop.svg", alt="alt") 
              span.ms-2 Shop   
      .search 
        .content 
          input(type="search" placeholder="search here")
          img(src="@/assets/images/search.svg")


</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
var i18n = useI18n({});
function addtolocal() {
  sessionStorage.setItem("lang", i18n.locale.value);
}
const menu = ref(false);
function renderside(){
  menu.value = !menu.value;
}

</script>

<style scoped lang="scss">

.large{
  .logo{
    img{
      max-width: 100%;
    }
  }
  .container{
   
    &::after{
    content: "";
    width: 100%;
    
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: -20px;
  
    @media (max-width: 576px){
      &{
        width: 90%;
        left: 50%;
        transform: translateX(-50%) ;
        }
      }
    }
    @media (max-width: 990px){
      .end{
        display: none !important;
      }
      .links{
        ul{
          gap: 0;
          justify-content: end !important;
          li{
            padding: 0 !important;
          }
        }
      }
    }
    .circ{
      border-radius: 50%;
      width: 40px;
      height: 40px;

      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
    
    }
  }


}
.sidemenu{
  .container{
    position: relative;
  &::after{
    content: "";
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    bottom: 3px;
  
    @media (max-width: 576px){
      &{
        width: 90%;
        left: 50%;
        transform: translateX(-50%) ;
        }
      }
    }
  }

  a{
    &:hover{
      color: red;
    }
  }
  img{
  width: 20px;
}   
  .rest{
    @media (max-width: 990px){
      &{
        display: none !important;
      }
      
    }
    gap: 10px;
    img{
      width: 20px;
    }

  }
}
span{
      font-weight: 600;
    }
 
input{
  width: 110px;
  outline: none;
  border: none;
}
</style>