import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from './components/Top.vue';
import ToDo from './components/ToDo.vue';
import Now from './components/Now.vue';
import ConsumeAPI from './components/ConsumeAPI.vue'

Vue.use(VueRouter);

const routes = [
    { path: '/', components: { default: Top } },
    { path: '/todo', components: { default: ToDo } },
    { path: '/now', components: { default: Now } },
    { path: '/coindesk', components: { default: ConsumeAPI } },
];

const router = new VueRouter({
    routes,
    mode: 'history',
    // ここはvue.config.jsのpublicPathと同じにしておかなくてはならない
    base: '/b1u3-vue-github/',
});

export default router;
