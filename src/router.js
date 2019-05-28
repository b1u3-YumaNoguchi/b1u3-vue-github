import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import ToDo from './components/ToDo.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Top },
    { path: '/todo', component: ToDo },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
