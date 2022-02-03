<template>
    <div>
        <div class="container">
            <div>
            <img :src="cImage(singleShow)" alt="image" align="left"> 
            </div>
            <div>
            <h2>{{singleShow.name}}</h2>
            <h4>rating: {{singleShow.rating.average}}<i class="fa fa-star scolor"></i></h4>
            <h4><b>Status:</b>{{ singleShow.status}}</h4>  
            <h4> Official website: <a :href="show.officialSite" rel="noopener noreferrer">{{singleShow.officialSite}}</a></h4>
            <p v-html="singleShow.summary"></p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
// import Category from './Category.vue'
export default {
  components: {  },
name: 'SingleView',
// props: ["id"],
data(){
    return {
        singleShow:[],
        genre:'',
        imageDefault: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTax9rQ-FuuaF4BvPj3GHIhMYriMIhujaOfkQ&usqp=CAU"
    }
},
computed: {
    ...mapState(['show']),
},
methods: {
...mapActions(['getShowById']),
cImage(detail){
        return detail.image? detail.image.original : this.imageDefault
    }
},
async created(){
    this.id = this.$route.params.id;
    await this.getShowById(this.id);
    this.singleShow = this.show;
    this.genre =this.singleShow.genres[0]
    console.log(this.genre);

    // this.show=this.shows;
}
}

</script>

<style scoped>
img{
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
.scolor{
    color: red;
}
@media screen and (min-width: 770px) {
  .container {
    display: flex;
  }
}
</style>
