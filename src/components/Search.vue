<template>
<div>
  <!-- <div class="searchclass" v-if="search"> -->
  <cards-display
          :shows="searchResult"
          from="search"
        >
  </cards-display>
  </div>
<!-- </div> -->
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardsDisplay from '../components/CardsDisplay.vue';

export default {
  components: {CardsDisplay},
  name: "Search",
  data() {
    return {
      name: "",
      showName:'',
      search:false,
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
    // async clicked(){
    //   await this.getShowsSearch(this.showName);
    //   this.search=true
    //   this.showName='';
    // }
    // this.getShowsSearch(this.name);
    // showClicked(id) {
    //   this.$router.push({ path: `/singleview/${id}` });
    // },
    // deimage(show) {
    //   return show.image ? show.image.original : this.imageDefault;
    // },
  },
  async created(){
    this.showName = this.$route.params.name;
    await this.getShowsSearch(this.showName);
    this.searchResult=this.searchShows;
  }
};
</script>

<style scoped>
.searchclass{
  position: absolute;
}
/* .shows {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.card {
  border: none;
  margin: 10px;
  width: inherit;

  cursor: pointer;
  border-radius: 10px;
}
.card:hover {
  transform: scale(1.03);
}
.card-img-top {
  height: 16rem;
  border-radius: inherit;
}
.card-title {
  text-align: center;
} */
</style>
