<template>
<div>
  <nav class="navbar navbar-light fixed-top">
    <strong v-if="$route.name === 'home'">GitHub Demo Project
    </strong>
    <strong v-if="$route.name === 'projects'">
      <span class="back">
        <router-link to="/"> 
          <img src="/static/img/Shape.svg"> 
        </router-link>
      </span>
      {{ username }}'s Github
    </strong>
    <strong v-if="$route.name === 'repo'">
      <span class="back">
        <router-link :to="'/' + username"> 
          <img src="/static/img/Shape.svg"> 
        </router-link>
      </span>
      {{ repoName }}
    </strong>
  </nav>
</div>
</template>

<script>
export default {
    computed: {
        username(){
            return this.$route.params.username
        },
        repoName(){
            return this.$route.params.repoName
        }
    }
}
</script>
<style scoped>
nav  {
  color:white;
  background: #484848;
  box-shadow: 0px 9px 16px rgba(0, 0, 0, 0.371716);
  height: 4em;
}
strong {
  font-size: 23px
}
div{
	padding-bottom: 4.5em
}
</style>

  