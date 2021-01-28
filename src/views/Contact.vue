<template>
	<div class="contact-candidate">
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
				<p>Make <strong>your voice</strong> heard!
				<br />
				Let the candidate know
				<br />what you care about.</p>
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
				<span class="icon solid fa-envelope"></span>
				<h2>Get In Touch</h2>
				<p>Use the form below to give {{candidate.full_name}} a piece of your mind.</p>
			</header>

			<!-- One -->
				<section class="wrapper style4 special container large">

					<!-- Content -->
					<section class="wrapper style4 special container large">
						<div class="content">
							<form>
								<div class="row gtr-50">
									<div class="col-6 col-12-mobile">
										<input type="text" name="name" placeholder="Name" />
									</div>
									<div class="col-6 col-12-mobile">
										<input type="text" name="email" placeholder="Email" />
									</div>
									<div class="col-12">
										<input type="text" name="subject" placeholder="Subject" />
									</div>
									<div class="col-12">
										<textarea name="message" placeholder="What's on your mind?" rows="7"></textarea>
									</div>
									<div class="col-12">
										<ul class="buttons">
											<li><input type="submit" class="special" value="Send Message" /></li>
										</ul>
									</div>
								</div>
							</form>
						</div>
					</section>
				</section>

		</article>

  </div>
</template>

<style>
</style>

<script>
export default {
  data: function () {
    return {
      candidates: [],
      candidate: {},
    };
  },
  created: function () {},
  methods: {},
};
</script>
