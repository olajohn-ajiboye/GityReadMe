<template>
 <div class="pad">
    <div class="container">
      <div class="text-center"><br>
          <strong>@Username</strong>       
        <input type="text" placeholder="Enter Github Username" class="search text-center" @keyup.13="gotoNextPage()" v-model="username" :style="'background-image: url(' + searchbg + ');'">
        <br><br>
        <p v-if="loading">Fetching Repos...</p>
      </div>
    </div>
  </div>
</template>

<script>
import iziToast from 'izitoast'

export default {
name: 'home',
  data () {
    return {
      username: "",
      loading: false,
      searchbg: "static/img/transparent.png"
    }
  },
  methods: {
    gotoNextPage(){
      if(!this.username){
        iziToast.error({
            title: 'Error',
            message: "Please type an username!",
            position: 'bottomRight',
            timeout: 2000
        });
        return;
      }
      this.loading = true;
      this.searchbg = "static/img/transparent.png";      
      this.$http.get("https://api.github.com/users/"+ this.username +"/repos")
        .then((res) => {
          this.loading = false;
          this.searchbg = "static/img/CheckmarkButton.svg";          
          setTimeout(()=>{
            this.$router.push({path: '/' + this.username});
          }, 555);
      }).catch( (e) => {
          this.loading = false;
        if(e.response && e.response.data.message == 'Not Found'){
          iziToast.error({
              title: 'Error',
              message: "Username not registered!",
              position: 'bottomRight',
              timeout: 2000
          });
        }
      });
      
    }
  }
}
</script>
<style scoped>
.container{
  padding-top: 5em;
}
</style>
