import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/test/:id',
    component: () => import('@/components/test.vue'),
    beforeEnter(to, from, next) {
      console.log('路由配置的beforeEnter');
      next();
    },
    meta: {
      requireAuth: false,
    },
  }],
});

router.beforeResolve((to, from, next) => {
  console.log(to);
  next();
});

export default router;