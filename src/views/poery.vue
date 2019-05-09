<template>
    <div class="poery">
      <Search v-on:_searchResult="result"></Search>
      <noData v-show="poeryResult.length==0"></noData>
      <div class="recItem" v-show="poeryResult.length>0" v-for="(item,index) in poeryResult" :key="index">
        <h5 v-html="item.title"></h5>
        <span v-html="item.authors"></span>
        <p v-html="item.content"></p>
      </div>
    </div>
</template>

<script>
    import noData from '@/components/noData'
    import Search from '@/components/search'

    export default {
        name: "poery",
        components:{
            noData,
            Search
        },
        data(){
          return{
            poeryResult:[],
            isShowLoading:false
          }
        },
        methods:{
          result(data){
            for(var i in data){
              data[i].content=data[i].content.replace(/\|/g,'</br>')
            }
            this.poeryResult = data;
          }
        }
    }
</script>

<style scoped>

</style>
