<template>
  <div class="index-details">
    <div id="wrapper">
    <!-- Main -->
          <div id="main">
            <div class="inner">
              <header>
                <h1>{{ message }}</h1>
              </header>
              <div v-for="candidate in candidates">
                <section class="tiles">
                  <article class="style2">
                    <span class="image">
                      <router-link v-bind:to="`/candidates/${candidate.id}`">
                        <img v-bind:src="candidate.image">
                        <h2>{{ candidate.full_name }}</h2>
                        <div class="content">
                          <p><h4>Party: {{ candidate.party_registered_to }}</h4>
                        </div>
                      </router-link>
                    </span>
                    <br>
                  </article>
                </section>
              </div>
            </div>
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
