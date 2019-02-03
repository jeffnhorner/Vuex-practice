<template>
    <div id="app">
        <Display />
        <img alt="Vue logo" src="./assets/logo.png">
        <div class="nav">
          <router-link to='/' class='nav-item'>Home</router-link>
          <router-link to='/about' class='nav-item'>About</router-link>
          <router-link to='/contact' class='nav-item'>Contact</router-link>      
        </div>
        <div class="view">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Display from './components/Display';

export default {
  name: 'app',
  components: {
    Display,
  },
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
  width: 100%;
  max-width: 700px;
  margin: 50px auto auto;
}
.nav-item {
  margin: 10px 20px;
}
</style>
