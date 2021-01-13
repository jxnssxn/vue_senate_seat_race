<template>
  <div class="index-details">

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
							<ul class="buttons stacked">
								<li v-if="!isLoggedIn()" class="current"><a href="/login" class="button fit scrolly">Login</a></li>
							</ul>
						</footer>
					</div>
				</section>

				<!-- Main -->
				<article id="main">

					<header class="special container">
						<!-- <span class="icon solid fa-chart-bar"></span> -->
						<h2><strong>Senate Seat Race</strong> is introducing the four contenders<br>that are aiming to reshape <strong>America</strong>.</h2><br><br>
						<strong><p>“All labor that uplifts humanity has dignity and importance and should be undertaken with painstaking excellence.”<br /> - Martin Luther King Jr</p></strong>
					</header>

					<!-- Three -->
					<section class="wrapper style3 container special">

						<header class="major">
							<h2>These are the four candidates running to represent <strong>Georgia</strong>!</h2>
						</header>

						<div class="row">
							<div class="col-6 col-12-narrower">

								<section>
									<a v-bind:href="'/candidates/14'" class="image featured"><img src="https://mobilizeamerica.imgix.net/uploads/event/ElectJon_20200923145157987926_20201030000610483317.png?auto=format&crop=faces&fit=crop&h=494.24083769633506&w=944" alt="" /></a>
									
									<header>
										<h3>Jon Ossoff</h3>
									</header>
									<p>Jon Ossoff is a Georgia native, media executive, investigative journalist, and small business owner. Jon and his wife Alisha, an OB/GYN physician, both grew up in Atlanta.</p>
								</section>

							</div>
							<div class="col-6 col-12-narrower">

								<section>
									<a v-bind:href="'/candidates/13'" class="image featured"><img src="https://mobilize-uploads-prod.s3.amazonaws.com/uploads/event/aashare_20201208211421313455.png" alt="" /></a>
									<header>
										<h3>Raphael G. Warnock</h3>
									</header>
									<p>Reverend Raphael Warnock grew up in Kayton Homes public housing in Savannah. 
									The family was short on money, but long on faith, love and humor.</p>
									
								</section>

							</div>
						</div>
						<div class="row">
							<div class="col-6 col-12-narrower">
								<section>
									<a v-bind:href="'/candidates/16'" class="image featured"><img src="https://i.ytimg.com/vi/h7jBsJ_cQV8/maxresdefault.jpg" alt="" /></a>
									<header>
										<h3>Kelly Loeffler</h3>
									</header>
									<p>Loeffler was born in Bloomington, Illinois, to Don and Lynda Loeffler, and raised on her family's corn and soybean farm in Stanford, Illinois. In 1988, she graduated from Olympia High School in Stanford, where she was in marching band, ran cross-country and track, and played varsity basketball.</p>
								</section>
							</div>
							<div class="col-6 col-12-narrower">

								<section>
									<a v-bind:href="'/candidates/15'" class="image featured"><img src="https://bloximages.chicago2.vip.townnews.com/valdostadailytimes.com/content/tncms/assets/v3/editorial/2/b1/2b1b939e-c143-11ea-930f-37cc41fa9de6/5f060725009ab.image.png?resize=1066%2C630" alt="" /></a>
									<header>
										<h3>David Perdue</h3>
									</header>
									<p>David Perdue is a Georgia native. David has over 40 years of business experience as the former CEO of Reebok athletic brand and Dollar General stores, where he created thousands of quality jobs and helped working families make it from payday to payday.</p>
								</section>

							</div>
						</div>

						<footer class="major">
							<!-- ///////////Do I want a button here?///////////  -->
							<!-- <ul class="buttons">
								<li><a href="#" class="button">See More</a></li>
							</ul> -->
							</footer>

					</section>






				</article>
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
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
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