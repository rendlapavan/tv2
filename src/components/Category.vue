<template>
  <div class="container">
    <cards-display :shows="category.details" from="category">
    </cards-display>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardsDisplay from './CardsDisplay.vue';

export default {
components: { CardsDisplay },
props: {
    cat:  String
  },
    data(){
        return{
            categoryName: '',
            category: [],
        }
    },
    computed: {
        ...mapState(['catShows']),
    },
    mounted(){
        // this.categoryName = this.$route.params.cat;
        this.category = this.catShows.find((eachCat) => eachCat.name === this.cat);
    }
}
</script>
