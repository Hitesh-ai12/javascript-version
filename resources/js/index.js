import About from 'pages/About.vue'; // Import your new page
import Home from 'pages/Home.vue';
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }, // Add route for new page
  ],
});

export default router;
