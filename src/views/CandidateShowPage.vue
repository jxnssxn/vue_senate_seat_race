<template>
  <div class="show-details">
    <div id="page-wrapper">
				<!-- Banner -->
				<section id="banner">

					<!--
						".inner" is set up as an inline-block so it automatically expands
						in both directions to fit whatever's inside it. This means it won't
						automatically wrap lines, so be sure to use line breaks where
						appropriate (<br />).
					-->
					<div class="inner">

						<header>
							<h2>Senate Seat</h2>
							<h2>Race</h2>
						</header>
						<p>Make <strong>your voice</strong>, count.
						<br />
						vote for your representation 
						<br /></p>
						<footer>
							<!-- <ul class="buttons stacked">
								<li><a href="/login" class="button fit scrolly">Login</a></li>
							</ul> -->
						</footer>

					</div>

				</section>
			<!-- Main -->
				<article id="main">
					<header class="special container">
						<p><h2>Meet {{candidate.full_name}}</h2></p>
						<img v-bind:src="candidate.image">
						<p>
							<!-- There are 4 issues lined out on candidate page, get familiar with candidate's stances and leave a thumbs up or a thumbs down based on if you agree or disagree. -->
						<h3>Give {{candidate.full_name}} a thumbs up or a thumbs down, based on how you align with the stances on health care, criminal justice reform, climate crisis, and social justice inequality.</h3>
						</p>
						<ul class="buttons">	
							<li><a href="#" class="button primary"><i class="fa fa-thumbs-up"></i> Thumbs up</a></li>							
							<li><a href="#" class="button"><i class="fa fa-thumbs-down"></i> Thumbs down</a></li>
						</ul>
							<div class="box">
								<p>{{candidate.bio}}</p>
							</div>		
					</header>
				
					<!-- One -->
						<section class="wrapper style4 container">
							<!-- Content -->
								<div class="content">
									<section>									
										<header>
											<h4>Email: {{candidate.email}}</h4>
											<h4>Age: {{candidate.age}}</h4>
											<h4>Party: {{candidate.party_registered_to}}</h4>
											<h4>Thumbs up: {{candidate.thumbs_up}}</h4>
											<h4>Thumbs down: {{candidate.thumbs_down}}</h4>
										</header>
										<div v-for="issue in issues">
											<h3><strong>{{ issue.topic }}</strong></h3>
											<h3>{{ issue.stance }}</h3>
										</div>
									
									</section>
								</div>

						</section>
					<!-- Two -->
						<section class="wrapper style1 container special">
							<div class="row">
								<div class="col-4 col-12-narrower">

									<section>
										<header>
											<h4>Visit {{candidate.full_name}}'s website</h4>
										</header>
										<footer>
											<ul class="buttons">
												<li><a href="" class="button small">Visit site</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div class="col-4 col-12-narrower">

									<section>
										<header>
											<h4>Contact {{candidate.full_name}}</h4>
										</header>
										<footer>
											<ul class="buttons">
												<li><a href="/Contact" class="button small">send a message</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div class="col-4 col-12-narrower">

									<section>
										<header>
											<h4>Register to vote</h4>
										</header>
										<footer>
											<ul class="buttons">
												<li><a href="https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button" class="button small">I'm voting</a></li>
											</ul>
										</footer>
									</section>

								</div>
							</div>
						</section>
				</article>
		</div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue from "vue";

Vue.component("button primary", "button", {
  data: function () {
    return {
      thumbsUp: 0,
      thumbsDown: 0,
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
      candidates: [],
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
