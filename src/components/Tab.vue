<template>
    <div class="tab">
        <router-link v-for="(item,index) in tabList" :key="index" :to="item.itemLink"  class="tab-item" @click.native="select(item)">
            <span :class="{ 'now' : item.itemSign,'tab-link':true}" v-html="item.itemName"></span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data(){
          return {
            tabList:[
              {
                itemName:"推荐",
                itemLink:"/recommend",
                itemSign:true
              },
              {
                itemName:"唐朝",
                itemLink:"/tang",
                itemSign:false
              },
              {
                itemName:"宋朝",
                itemLink:"/song",
                itemSign:false
              },
              {
                itemName:"诗人",
                itemLink:"/poery",
                itemSign:false
              }
            ]
          }
        },
        methods:{
          select (item){
            for(var i in this.tabList){
              this.tabList[i].itemSign=false;
            }
            item.itemSign=true;
          }
        }
    }
</script>

<style scoped>
     .tab{
       line-height: .88rem;
       box-shadow: 0 0 .2rem #ddd inset;
     }
     .tab-item{
       display:inline-block;
       width:23%;
     }
     .tab-link{
       line-height: 30px;
       display: inline-block;
     }
     .tab-link.now{
       border-bottom: 1px solid #333;
     }
</style>
