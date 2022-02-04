<template>
  <div>
    <div :class="showclass">
      <div v-for="(show, index) in shows" :key="index">
        <div class="card" @click="showClicked(show.id)">
          <div v-if="show.rating.average" class="ribbon">
            {{ show.rating.average }}<i class="fa fa-star fa-xs"></i>
          </div>
          <img class="card-img-top" :src="deimage(show)" alt="show image" />
        </div>
        <h5 class="card-title" v-if="from == 'search'">
          {{ show.name }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { shows: Array, from: String },
  data() {
    return {
      dShows: [],
      imageDefault:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU",
    };
  },
  computed: {
    showclass() {
      return this.from == "search"
        ? "showfrmsrch"
        : this.from == "category"
        ? "showfrmsrch"
        : "showsg";
    },
  },
  methods: {
    deimage(show) {
      return show.image ? show.image.original : this.imageDefault;
    },
    showClicked(id) {
      this.$router.push({ path: `/singleview/${id}` });
    },
  },
};
</script>

<style scoped>
h3 {
  text-decoration-line: underline;
  padding-left: 1.5rem;
  padding-top: 1rem;
}
h5 {
  color: #f0f0f0;
}
.category {
  margin: 1.2rem;
  border-radius: 20px;
}
.showsg {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.showfrmsrch {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
@media screen and (max-width: 769px) {
  .showsg {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-auto-flow: column;
    grid-auto-columns: 120px;
    overflow-x: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  .showsg::-webkit-scrollbar {
    display: none;
  }
  .showfrmsrch {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  .card {
    margin: 5px !important;
  }
  .card-img-top {
    height: 8rem !important;
    border-radius: inherit;
  }
  .card-title {
    font-size: 14px;
  }
  .ribbon {
    width: 35px !important;
    font-size: 12px;
  }
  .fa-xs {
    font-size: 8px;
  }
}
.card {
  border: none;
  margin: 8px;
  width: inherit;
  cursor: pointer;
  border-radius: 10px;
  background-color: inherit;
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 0 5px #f0f0f0;
}
.card-img-top {
  height: 15rem;
  border-radius: inherit;
}
.card-title {
  text-align: center;
}
.ribbon {
  background-color: #463444;
  width: 40px;
  position: absolute;
  text-align: center;
  color: #f0f0f0;
  top: -1px;
  right: 0px;
  border-radius: 3px 10px 3px 3px;
}
</style>
