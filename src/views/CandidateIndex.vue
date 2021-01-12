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
								<li><a href="/login" class="button fit scrolly">Login</a></li>
							</ul>
						</footer>

					</div>

				</section>

				<!-- Main -->
				<article id="main">

					<header class="special container">
						<!-- <span class="icon solid fa-chart-bar"></span> -->
						<h2><strong>Senate Seat Race</strong> is introducing the four contenders<br>that are aiming to reshape <strong>America</strong>.</h2>
						<p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
						<br />
						it's minimally designed, fully responsive, built on HTML5/CSS3,
						and, like all my stuff,
						<br />
						released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
					</header>

					<!-- Three -->
						<section class="wrapper style3 container special">

							<header class="major">
								<h2>These are the four<strong> Candidates!</strong></h2>
							</header>

							<div class="row">
								<div class="col-6 col-12-narrower">

									<section>
										<a v-bind:href="'/candidates/14'" class="image featured"><img src="https://i.insider.com/5fed2ae8a18a450018cb658c?width=700" alt="" /></a>
										
										<header>
											<h3>jon ossoff</h3>
										</header>
										<p>Jon Ossoff is a Georgia native, media executive, investigative journalist, and small business owner. Jon and his wife Alisha, an OB/GYN physician, both grew up in Atlanta.</p>
									</section>

								</div>
								<div class="col-6 col-12-narrower">

									<section>
										<a v-bind:href="'/candidates/13'" class="image featured"><img src="https://www.gannett-cdn.com/presto/2020/10/26/USAT/24706bf7-270d-46eb-9121-762d0dec7704-GTY_1229202423.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp" alt="" /></a>
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
										<a v-bind:href="'/candidates/16'" class="image featured"><img src="https://thehill.com/sites/default/files/loefflerkelly_010620gn5_lead.jpg" alt="" /></a>
										<header>
											<h3>Kelly Loeffler</h3>
										</header>
										<p>Loeffler was born in Bloomington, Illinois, to Don and Lynda Loeffler, and raised on her family's corn and soybean farm in Stanford, Illinois. In 1988, she graduated from Olympia High School in Stanford, where she was in marching band, ran cross-country and track, and played varsity basketball.</p>
									</section>
								</div>
								<div class="col-6 col-12-narrower">

									<section>
										<a v-bind:href="'/candidates/15'" class="image featured"><img src="https://media3.s-nbcnews.com/j/newscms/2020_48/3431011/201125-david_perdue-mc-1313_cb5780c62237fbfebd446ea807170c06.nbcnews-fp-1200-630.JPG" alt="" /></a>
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