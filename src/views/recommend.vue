<template>
    <div class="recommend">
      <swiper :imgs="imgs"></swiper>
      <p class="title">推荐诗词</p>
      <div class="recItem" v-show="isShow">
        <h5 v-html="recommends.title"></h5>
        <span v-html="recommends.authors"></span>
        <p v-html="recommends.content"></p>
      </div>
      <div v-show="!isShow">
        <Loading></Loading>
      </div>
    </div>
</template>

<script>
    import swiper from '@/components/swiper.vue'
    import Loading from '@/components/loading'
    import { recommendPoetry } from '@/api/recommend'

    export default {
        name: "recommend",
        data(){
          return {
            recommends:{},
            imgs: [
              {url:require('../assets/images/timgfore.jpg')},
              {url:require('../assets/images/timg.png')},
              {url:require('../assets/images/timgthree.jpg')},
              {url:require('../assets/images/timgtwo.png')}
            ],
            isShow:false
          }
        },
        components: {
          swiper,
          Loading
        },
        created(){
            this._recommendPoetry()
        },
        methods:{
          _recommendPoetry (){
            recommendPoetry().then((res)=>{
              this.isShow = true;
               if(res.code=='200'){
                 res.result.content = res.result.content.replace(/\|/g,'</br>')
                 this.recommends = res.result

               }
            })
          }
        }
    }
</script>

<style scoped>

</style>
