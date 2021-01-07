<template>
  <div class="show-details">
    <div id="wrapper">
      <header>
        <h1>{{ message }}</h1>
      </header>
      
      <img v-bind:src="candidate.image">
      <h4>  {{candidate.full_name}}</h4>
      <h4>  Email: {{candidate.email}}</h4>
      <h4>  Age: {{candidate.age}}</h4>
      <h4>  Party: {{candidate.party_registered_to}}</h4>
      <!-- <h4>: {{candidate.issues_id}}</h4> -->
      <h4>  Thumbs up: {{candidate.thumbs_up}}</h4>
      <h4>  Thumbs down: {{candidate.thumbs_down}}</h4>
      <br>
      
        
      <h2>---------------</h2>
      <h2>Issues</h2>
      <div>
      <div v-for="issue in issues">
        <h3>{{ issue.topic }}</h3>
        <h3>{{ issue.stance }}</h3>
      </div>

      <!-- <div>
        <table>
          <th>issues</th>
          <th>{{issue}}</th>
        </table>
      </div> -->

      </div>
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
      message: "Welcome to Vue.js!",
      // candidates: [],
      candidate: {},
      issues: [],
      issue: {},
    };
  },
  created: function () {
    this.candidateShow();
    this.issueIndex();
  },
  methods: {
    candidateShow() {
      console.log("candidate");
      axios.get(`/api/candidates/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.candidate = response.data;
      });
    },
    issueIndex: function () {
      console.log("issues index");
      axios.get(`/api/issues/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.issues = response.data;
      });
    },
  },
};
</script>
