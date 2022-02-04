<template>
  <div>
    <div class="container" v-if="!error">
      <div>
        <img :src="cImage(singleShow)" alt="image" align="left" />
      </div>
      <div>
        <h2>{{ singleShow.name }}</h2>
        <h4 v-if="singleShow.rating">
          rating: {{ singleShow.rating.average
          }}<i class="fa fa-star scolor"></i>
        </h4>
        <h4><b>Status:</b>{{ singleShow.status }}</h4>
        <h4 v-if="show.officialSite">
          Official website:
          <a :href="show.officialSite">{{ singleShow.officialSite }}</a>
        </h4>
        <p v-html="singleShow.summary"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "SingleView",
  data() {
    return {
      singleShow: [],
      imageDefault:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU",
    };
  },
  computed: {
    ...mapState(["show", "error"]),
  },
  methods: {
    ...mapActions(["getShowById"]),
    cImage(detail) {
      return detail?.image?.original || this.imageDefault;
    },
  },
  async created() {
    this.id = this.$route.params.id;
    await this.getShowById(this.id);
    this.singleShow = this.show;
  },
};
</script>

<style scoped>
img {
  height: 20rem;
  width: 20rem;
  margin: 10px;
  border-radius: 10px;
}
@media screen and (max-width: 768px) {
  img {
    height: 14rem;
    width: 14rem;
    margin: 10px;
    border-radius: 10px;
  }
}
.scolor {
  color: red;
}
@media screen and (min-width: 770px) {
  .container {
    display: flex;
  }
}
</style>
