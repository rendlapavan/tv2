<template>
  <div id="app">
    <div v-if="!error">
      <div class="navPositio">
        <navbar />
      </div>
      <div class="app-margin">
      <router-view></router-view>
      </div>
    </div>
    <div v-else>
      <page-not-found></page-not-found>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "./components/Navbar.vue";
import PageNotFound from "./components/PageNotFound.vue";
export default {
  name: "App",
  components: {
    Navbar,
    PageNotFound,
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["getShows"]),
  },
  created() {
    this.getShows();
  },
};
</script>
<style>
.app-margin {
  margin-top: 70px;
}
@media screen and (max-width: 425px) {
  .app-margin {
    margin-top: 100px;
  }
}
</style>
