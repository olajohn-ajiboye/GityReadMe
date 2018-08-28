<template>
<div>
  <div class="main">
    <div class="container">
      <h1 class="project-title text-center">Projects
      </h1>
      <p class="text-center" v-if="loadingRepo">
        <br> 
        <br> Loading Repos...
      </p>
      <p class="text-center error" v-if="!loadingRepo && repos.length == 0">This user has no repo!
      </p>
      <br>
      <div class="container">
        <div class="projects container" v-if="repos.length > 0">
          <ul class="project-list">
            <li class="text-truncate" v-for="repo in repos" :key="repo.id">
              <router-link :to="'/' + username + '/' + repo.name"> {{ repo.name }} 
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import iziToast from 'izitoast'

export default {
  name: 'projects',
  data () {
    return {
      username: 'Username',
      loadingRepo: true
    }
  },

  mounted(){
     this.username = this.$route.params.username;
     this.getRepos();
  },

  methods: {
    getRepos(){
      this.loadingRepo = true;
      this.$http.get("https://api.github.com/users/"+ this.username +"/repos")
        .then((res) => {
          this.loadingRepo = false
          //store response json in vuex(store/index.js)
          this.$store.commit('recieve_repo_data', res.data)
      }).catch( (e) => {
        this.loadingRepo = false;
      });
    }
  },
  computed: {
    repos(){
      return this.$store.state.repos
    }
  },
  watch: {
    '$route': 'getRepos'
  }
}
</script>
<style scoped>
.main{
	margin-top: 5%;
}
.project-title{
  font-family: Roboto;
  font-style: normal;
	font-weight: bold;
	font-size: 35px;
}

.projects{
	background: #F5F9FC;
	box-shadow: 0px 9px 28px rgba(0, 0, 0, 0.282863);
	border-radius: 18px;
	min-height: 44px;
}

ul.project-list li a{
	display: block !important;
	text-align: center;
	padding: 0.65em;
	font-size: 30px;
	text-decoration: none;
	color: #484848;
}
ul.project-list li a:hover{
	background: #00D586;
	color: #fff;
}
</style>
