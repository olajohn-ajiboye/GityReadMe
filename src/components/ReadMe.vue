<template>
<div>
  <div class="main">
    <div class="container">        
      <h1 class="read-me text-center ">README info</h1>
        <p class="text-center" v-if="loading"><br>Loading...</p>
          <div class="container">
           <div class="row">
            <div class="col-12">
               <vue-markdown :source="readme"/>
            </div>
          </div>          
        </div>
        <p class="text-center error" v-if="notFound">README file not found! </p><br><br>
      </div>      
    </div>
  </div>
</template>

<script>
import iziToast from 'izitoast';
import VueMarkdown from 'vue-markdown'

export default {
  name: 'projects',
  data () {
    return {
      username: "",
      repoName: "",
      loading: true,
      notFound: false
    }
  },
  components: {
    VueMarkdown
  },

  mounted(){
    this.username = this.$route.params.username;
    this.repoName = this.$route.params.repoName;
    this.getReadMe();
  },

  methods: {
    getReadMe(){
      
      this.$http.get("https://raw.githubusercontent.com/" + this.username + "/" + this.repoName + "/master/README.md")
        .then( (res) => {
          //store response json in vuex(store/index.js)
          this.$store.commit('recieve_readme_data', res.data)
          this.loading = false;
        }).catch((e) => {
          this.loading = false;
          this.notFound = true;
      });
    }
  },
  computed: {
    readme(){
      return this.$store.state.readme
    }
  }
}
</script>
<style scoped>

.readme{
  color: black;
  padding-top: 1em;
  font-size:10vw;
  padding: 2em 2em;
  
}
</style>
