<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
	  <br/>
	  <v-btn color="primary" v-on:click="fetchUsers">Load Users</v-btn>
	  
		<ul v-if="typeof(users) == 'object'">
			<li v-for="u in users">
				<div>username: {{ u.username }}</div>
				<div>password: {{ u.password }}</div>
			</li>
		</ul>
		
		<div v-if="typeof(users) == 'string'" class="font-weight-bold red--text">{{users}}</div>
	  
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>


<script>

export default {
  data() {
	return {
		users: null
	}
  },
  methods: {
    fetchUsers: function (msg) {
		//this.$axios.$get('http://localhost:3000/api/users');
	  const axios = require('axios');
	  axios
      .get('http://localhost:3000/api/users')
      .then(response => (this.users = response.data))
	  .catch(error=> (this.users = "Something went wrong. Try again later."))
    }
  }
}
</script>