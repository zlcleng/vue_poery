<template>
  <div class="song">
    <div class="recItem" v-for="(item,index) in songList" :key="index">
      <h5 v-html="item.title"></h5>
      <span v-html="item.authors"></span>
      <p v-html="item.content"></p>
    </div>
    <div v-show="isShowLoading">
      <Loading></Loading>
    </div>
    <btmLoading v-show="isShowBtmLoading"></btmLoading>
  </div>

</template>

<script>
  import { getSongPoetry } from '@/api/getPoetrys'
  import Loading from '@/components/loading'
  import btmLoading from "@/components/btmLoading"

  export default {
    name: "song",
    data(){
      return{
        songList:[],
        isShowLoading:false,
        pageIndex:1,
        pageSize:20,
        isShowBtmLoading:false
      }
    },
    components: {
      Loading,
      btmLoading
    },
    created(){
      this._getSongPoetry(this.pageIndex,this.pageSize);
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll,true)
    },
    methods:{
      _getSongPoetry(page,pageSize){
        page ==1?(this.isShowLoading = true):(this.isShowBtmLoading = true)
        getSongPoetry(page,pageSize).then((res)=>{
          this.isShowLoading = false
          this.isShowBtmLoading = false
          if(res.code==200){
            if(res.result.length>=0){
              for(var i in res.result){
                this.songList.push(res.result[i])
                this.songList[i].content = this.songList[i].content.replace(/\|/g,'</br>')
              }
            }else{
               console.log("到底了~~~")
            }
          }
        })
      },
      handleScroll () {
        if(document.getElementById("container").scrollTop+document.getElementById("container").clientHeight>=
          document.getElementById("container").scrollHeight){
            this.pageIndex++;
            this._getSongPoetry(this.pageIndex,this.pageSize)
        }
      }
    }
  }
</script>

<style scoped>

</style>
