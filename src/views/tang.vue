<template>
  <div class="tang">
    <div class="recItem" v-for="(item,index) in tangList" :key="index">
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
  import { getTangPoetry } from '@/api/getPoetrys'
  import Loading from '@/components/loading'
  import btmLoading from "@/components/btmLoading"

    export default {
        name: "tang",
        data(){
          return{
             tangList:[],
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
          this._getTangPoetry(this.pageIndex,this.pageSize)
        },
        mounted () {
          window.addEventListener('scroll', this.handleScroll,true)
        },
        methods:{
            _getTangPoetry(page,pageSize){
              page ==1?(this.isShowLoading = true):(this.isShowBtmLoading = true)
              getTangPoetry(page,pageSize).then((res)=>{
                this.isShowLoading = false
                this.isShowBtmLoading = false
                if(res.code==200){
                  // this.tangList = res.result
                  if(res.result.length>=0) {
                    for (var i in res.result) {
                      this.tangList.push(res.result[i])
                      this.tangList[i].content = this.tangList[i].content.replace(/\|/g, '</br>')
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
                this._getTangPoetry(this.pageIndex,this.pageSize)
              }
            }
        }
    }
</script>

<style scoped>

</style>
