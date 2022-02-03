<template>
  <div>
    <div class="category shadow">
      <h4>Popular Shows</h4>
      <cards-display :shows="popular"> </cards-display>
    </div>
    <div class="category shadow" v-for="(cat, index) in catShows" :key="index">
      <h4 class="catName" @click="viewCategory(cat.name)">
        {{ cat.name
        }}<i class="fa fa-angle-double-right arrow" aria-hidden="true"></i>
      </h4>
      <cards-display
        :shows="limitNoOfShows(cat.details)"
        from="home"
      >
      </cards-display>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import CardsDisplay from "../components/CardsDisplay.vue";

export default {
  name: "Home",
  components: { CardsDisplay },
  computed: {
    ...mapState(["shows", "popular", "catShows"]),
  },
  methods: {
    limitNoOfShows(shows) {
      return [...shows].splice(0, 14);
    },
    viewCategory(cat) {
      this.$router.push({ path: `/category/${cat}` });
    },
    scrollToTop() {
      console.log("scroll");
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.category {
  margin: 17px;
  border-radius: 10px;
}
i {
  align-items: center;
}
h4 {
  color: #f0f0f0;
  cursor: pointer !important;
}
.arrow {
  margin-left: 1px;
}
.shadow {
  box-shadow: 1px 3px 10px #000000 !important;
}
@media screen and (max-width: 769px) {
  h4 {
    font-size: unset;
  }
}
</style>
