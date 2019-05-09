<template>
    <div class="loading">
      <img src="../assets/images/loading.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>

  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .loading p {
      padding: .15rem .15rem .2rem;
      color: #fff;
      font-size: .16rem;
    }
  .loading img {
     width: 1rem;
     height: 1rem;
   }
</style>
