<template>
  <div class="container">
        <p style="font-size:48px">&#128532;</p>
        <h1 class="message">{{ errorMessage }}</h1>
        <button @click="goToHome" class="btn btn-secondary btn-sm"
          >Go To Home Page</button
        >
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      errorMessage: "Sorry something went wrong....!!",
    };
  },
  methods: {
    ...mapMutations(["SET_ERROR_TO_FALSE"]),
    goToHome() {
      this.SET_ERROR_TO_FALSE();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 10rem;
}
</style>
