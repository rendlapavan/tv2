<template>
  <div>
    <div class="container" v-if="getShowsByCat(categoryName)">
      <cards-display :shows="getShowsByCat(categoryName)" from="category">
      </cards-display>
    </div>
    <div v-else>
      <page-not-found></page-not-found>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardsDisplay from "./CardsDisplay.vue";
import PageNotFound from "./PageNotFound.vue";

export default {
  components: { CardsDisplay, PageNotFound },
  data() {
    return {
      categoryName: "",
    };
  },
  computed: {
    ...mapGetters(["getShowsByCat"]),
  },
  created() {
    this.categoryName = this.$route.params.cat;
  },
};
</script>
