<template lang="pug">
.subscribe
    Card(color="static").w-100
        .content.d-flex.align-items-center.py-3.px-2
            .part1 
                h1 اشترك في نشرة همم الأسبوعية
            
            .part2
                h2 نشرة همم البريدية
                .form.d-flex
                    input.me-2.mt-2(type="text" placeholder="الاسم بالكامل")
                    input.me-2.mt-2(type="email" placeholder="البريد الالكتروني")
                    Cardbutton.me-2.mt-2(color="light").text-center الاشتراك

        
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.subscribe{
    direction: rtl;

    .content{
        gap: 5px;
    @media (max-width:990px) {
    flex-direction: column;
    .form{
        flex-direction: column;
    }
    .part1{
        width: 100%!important;
    }
    .part2{
        width: 100%!important;
        
    }
    }
    .part1{
        width: 50%;
        h1{
            width: 80%;
        }
    }
    .part2{
        width: 50%;
        .form{
            flex-wrap: wrap;
            input{
            width: auto;
            padding: 0.5rem;
            border: 1px solid black;
            
        }
        }
    
    }

    }
   
}
</style>