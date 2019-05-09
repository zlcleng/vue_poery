<template>
  <div id="app">
      <Tab></Tab>
     <div id="container">
       <router-view/>
     </div>
  </div>
</template>

<script>
  import Tab from './components/Tab'
  import loading from './components/loading'
  export default {
    components:{
      Tab,
      loading
    }
  }
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#container{
  position:absolute;
  top:.88rem;
  width: 100%;
  overflow: scroll;
  -overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
  height: calc( 100% - .88rem);
}
</style>
