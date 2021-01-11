<template>
  <div class="show-details">
  

    <div id="page-wrapper">

			



			<!-- Main -->
				<article id="main">

					<header class="special container">
						<!-- <span class="icon solid fa-mobile-alt"></span> -->
						<h2>And finally there's <strong>No Sidebar</strong></h2>
						<p>Where that in the center faces the nameless horrors alone.</p>
					</header>

					<!-- One -->
						<section class="wrapper style4 container">

							<!-- Content -->
								<div class="content">
									<section>
										<a href="#" class="image featured"><img src="/images/pic04.jpg" alt="" /></a>
										<header>
											<h3>Dolore Amet Consequat</h3>
										</header>
										<p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum massa. Morbi eu faucibus massa. Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
									
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
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul class="buttons">
												<li><a href="#" class="button small">Learn More</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div class="col-4 col-12-narrower">

									<section>
										<header>
											<h4>Message {{candidate.full_name}}</h4>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul class="buttons">
												<li><a href="#" class="button small">Learn More</a></li>
											</ul>
										</footer>
									</section>

								</div>
								<div class="col-4 col-12-narrower">

									<section>
										<header>
											<h4>Register to vote</h4>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
										<footer>
											<ul class="buttons">
												<li><a href="#" class="button small">Learn More</a></li>
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
