<template>
  <div class="login">
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
                Sign up and follow the candidates on their
                <br />to the senate.</p>
                <footer>
                  <!-- <ul class="buttons stacked">
                    <li><a href="/login" class="button fit scrolly">Login</a></li>
                  </ul> -->
                </footer>

              </div>

            </section>

      <section class="wrapper style4 special container large">
        <form v-on:submit.prevent="submit()">
          <h1>Login</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </section>
    </div>  
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "frank@dejonng.com",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/candidates");
        })
        .catch((error) => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
