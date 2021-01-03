<template>
  <div class="candidate-index">
    <h1>{{ message }}</h1>
    <div v-for="candidate in candidates">
    <div class="card mb-3" style="max-width: 740px;">
  <div class="row g-0">
    <div class="col-md-4">
      <p><img v-bind:src="candidate.image" v-bind:alt="candidate.title"></p>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title"><h4>{{ candidate.full_name }}</h4></h5>
        <p class="card-text"><h4>{{ candidate.gender }}</h4><h4>{{ candidate.party_registered_to }}</h4><h4>{{ candidate.thumbs_up }}</h4><h4>{{ candidate.thumbs_down }}</h4>
      </div>
    </div>
  </div>
</div>
    <!-- <button v-on:click="candidateIndex">candidateIndex</button> -->
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
  created: function () {
    this.candidateIndex();
  },
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
