<template>
    <div>
        <nav class="navbar fixed-top">
          <!-- <cards-display/> -->
          <div class="container">
            <router-link class="title" :to="{ path: '/' }"><i class="fa fa-television fa-2x router"></i>TV MAZE</router-link>
                
        <!-- <search/> -->
                <form class="d-flex" >
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        v-model="showName"
                        />
                    <button @click="clicked()" class="btn btn-outline-success">Search</button>
                </form>
          </div>
        </nav>
  
    </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
// import Search from './Search.vue';

export default {
  // components: { Search },
  name: 'Navbar',
  data(){
    return {
      showName:''
    }
  },
  computed: {
    ...mapState(["searchShows"]),
  },
  methods: {
    ...mapActions(["getShowsSearch"]),
    clicked(){
      // await this.getShowsSearch(this.showName);
      this.$router.push({ path: `/search/${this.showName}` });
//       this.$router.push(`/search`).catch(error => {
//   if (error.name != "NavigationDuplicated") {
//     throw error;
//   }
// });
  },
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
} 
.title{
  color: aliceblue;
  text-decoration-line: none;
}

</style>