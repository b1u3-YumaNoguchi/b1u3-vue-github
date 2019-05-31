import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import ToDo from './components/ToDo.vue';
import Now from './components/Now.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/todo', component: ToDo },
    { path: '/now', component: Now },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
