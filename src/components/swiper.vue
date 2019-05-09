<template>
    <div class="swiper-container" id="swiper">
       <div class="swiper-wrapper">
         <div class="swiper-slide" v-for="item in imgs">
           <img class="img" v-bind:src="item.url" />
           <!--<img class="img" src="../assets/images/timg.png" />-->

         </div>
       </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    // import Swiper from 'assets/js/swiper.min.js'
    import Swiper from "swiper"
    export default {
        name: "swiper",
        props: {
          imgs: {
            type: Array,
            default: () => []
          }
        },
        mounted(){
          this.initSwiper()
        },
        methods: {
          initSwiper() {
             var mySwiper = new Swiper ('.swiper-container', {
               // direction: 'vertical',
               loop:true,
               autoplay: {
                 delay: 2000,
                 disableOnInteraction: false
               }
            })
          }
        }
    }
</script>

<style scoped>
   #swiper{
     width:100%;
     height:3rem;
   }
   #swiper img{
     width:100%;
     height:100%;
   }
</style>
