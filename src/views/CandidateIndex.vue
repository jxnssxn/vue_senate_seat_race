

<template>
  <div class="candidate-index">
    <h1>{{ message }}</h1>
    <button v-on:click="candidateIndex">candidateIndex</button>
    <div v-for="candidate in candidates">
    <h1>{{ candidate.image }}</h1>
    <h1>{{ candidate.first_name }}</h1>
    <h1>{{ candidate.last_name }}</h1>
    <h1>{{ candidate.gender }}</h1>
    <!-- <h1>{{ candidate.issue_id }}</h1> -->
    <h1>{{ candidate.party_registered_to }}</h1>
    <h1>{{ candidate.thumbs_up }}</h1>
    <h1>{{ candidate.thumbs_down }}</h1>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      candidates: [],
      message: "Welcome to candidates page!",
    };
  },
  created: function () {},
  methods: {
    candidateIndex: function () {
      console.log("candidate index");
      axios.get("/api/candidates").then((response) => {
        console.log(response.data);
        this.candidates = response.data;
      });
    },
  },
};
</script>
