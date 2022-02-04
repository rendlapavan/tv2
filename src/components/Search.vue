<template>
<div>
  <div v-if="searchResult">
  <cards-display
          :shows="searchResult"
          from="search"
        >
  </cards-display>
  </div>
  <page-not-found v-else></page-not-found>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardsDisplay from '../components/CardsDisplay.vue';
import PageNotFound from './PageNotFound.vue';

export default {
  components: {CardsDisplay, PageNotFound},
  name: "Search",
  data() {
    return {
      showName:'',
      searchResult: [],
      imageDefault:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU",
    };
  },
  computed: {
    ...mapState(["searchShows"]),
  },
  methods: {
    ...mapActions(["getShowsSearch"]),
  },
  async created(){
    this.showName = this.$route.params.name;
    await this.getShowsSearch(this.showName);
    this.searchResult=this.searchShows;
  }
};
</script>

