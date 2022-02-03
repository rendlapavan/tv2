<template>
  <div id="app">
    <div class="navPosition">
      <navbar/>
    </div>
      
    <router-view/>
      
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from './components/Navbar.vue'
// import Search from './components/Search.vue'
// import Home from "./views/Home.vue";
export default {
  name: 'App',
  components: {
    // Search,
    Navbar,
    // Home
  },
  methods:{
    ...mapActions(["getShows"]),
  },
  created() {
    this.getShows();
  },
}
</script>
<style >
#app{
  background-color: #281f27;
  color: #f0f0f0;
}
.navPosition{
  margin-bottom: 54px;
}
</style>

