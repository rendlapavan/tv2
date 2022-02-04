<template>
    <div>
        <nav class="navbar fixed-top">
          <div class="container">
            <router-link class="title" :to="{ path: '/' }"><i class="fa fa-television fa-2x router"></i>TV MAZE</router-link>
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

export default {
  name: 'Navbar',
  data(){
    return {
      showName:''
    }
  },
  methods: {
    clicked(){
      this.$router.push({ path: `/search/${this.showName}` });
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