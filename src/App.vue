<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li>
    </ul>
    
  </div>
</template>

<script>
module.exports={
  data:function(){
    return  {
      msg: 'hello Vue.JS!22222'+new Date(),
      seen:false,
      books:['Java','Oracle','NodeJS','C#']
    }
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
  margin-top: 60px;
}
</style>
