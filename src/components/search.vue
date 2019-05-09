<template>
    <div id="search">
      <input type="text" placeholder="请输入搜索诗人或诗句" v-model="searchText">
      <button @click="search">搜索</button>
    </div>

</template>

<script>
  import { search } from '@/api/searchPoery'
    export default {
        name: "search",
        data(){
         return{
           searchText:"",
           searchResult : []
         }
       },
        methods:{
           search(){
              search(this.searchText).then((res)=>{
                if(res.code==200){
                   this.searchResult = res.result;
                   this.$emit('_searchResult', this.searchResult)
                }
              })
           }
        }

    }
</script>

<style scoped>
   #search{
      line-height:.6rem;
      font-size:.3rem;
      margin: .2rem 0;
   }
   #search input{
     height: .6rem;
     border: none;
     width: 70%;
     border-radius: .3rem;
     padding: 0 .3rem;
   }
   #search button{
     border: none;
     width: 15%;
     height: .6rem;
     border-radius: .6rem;
     vertical-align: bottom;
     margin-left: .2rem;
   }
</style>
