import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import ReadMe from '@/components/ReadMe';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:username',
      name: 'projects',
      component: Projects
    },
    {
      path: '/:username/:repoName',
      name: 'repo',
      component: ReadMe
    }
  ],
  mode: 'history'
});
