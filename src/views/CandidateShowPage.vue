<template>
  <div class="home">
    <h4><img  v-bind:src="`${this.candidate.image}`"></h4>
    <h4>Name: {{ candidate.full_name }}</h4>
    <h4>Email: {{ candidate.email }}</h4>
    <h4>Age{{ candidate.age }}</h4>
    <h4>Politcal Affiliation: {{ candidate.party_registered_to}}</h4>
    <h4>thumbs_up: {{ candidate.thumbs_up}}</h4>
    <h4>thumbs_down: {{ candidate.thumbs_down}}</h4>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      candidate: {},
    };
  },
  created: function () {
    this.candidateShow();
  },
  methods: {
    candidateShow() {
      console.log("candidate 14");
      axios.get(`/api/candidates/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.candidate = response.data;
      });
    },
  },
};
</script>
