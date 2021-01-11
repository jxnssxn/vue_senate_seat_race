<template>
  <div class="show-details">
    <div id="wrapper">
      <header>
        <h1>{{ message }}</h1>
      </header>
      
      <img v-bind:src="candidate.image">
      <div>
      <h4>  {{candidate.full_name}}</h4>
      <h4>  Email: {{candidate.email}}</h4>
      <h4>  Age: {{candidate.age}}</h4>
      <h4>  Party: {{candidate.party_registered_to}}</h4>
      <!-- <h4>: {{candidate.issues_id}}</h4> -->
      <h4>  Thumbs up: {{candidate.thumbs_up}}</h4>
      <h4>  Thumbs down: {{candidate.thumbs_down}}</h4>
      </div>
      
        
      <h2>---------------</h2>
      <h2>Issues</h2>
      <div>
      <div v-for="issue in issues">
        <h3>{{ issue.topic }}</h3>
        <h3>{{ issue.stance }}</h3>
      </div>

      <div>
        <p><li><a href="/candidates" class="button">Thumbs up</a></li>
        <li><a href="/candidates" class="button">Thumbs down</a></li></p>
        <br>
      </div>
     
      <!-- <a href="/candidates" class="thumbsDOWN-button">Thumbs down</a> -->


      <!-- <div id="components-demo">
        <button-counter>like</button-counter>
      </div> -->

      <!-- <div>
        <table>
          <th>issues</th>
          <th>{{issue}}</th>
        </table>
      </div> -->
          <footer id="footer">
						<div class="inner">
							<section>
								<h2>Get in touch</h2>
								<form method="post" action="#">
									<div class="fields">
										<div class="field half">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div class="field half">
											<input type="email" name="email" id="email" placeholder="Email" />
										</div>
										<div class="field">
											<textarea name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<ul class="actions">
										<li><input type="submit" value="Send" class="primary" /></li>
									</ul>
								</form>
							</section>
            </div>
          </footer>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue from "vue";

Vue.component("button-counter", {
  data: function () {
    return {
      count: 0,
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>',
});

// new Vue({ el: "#components-demo" });

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
