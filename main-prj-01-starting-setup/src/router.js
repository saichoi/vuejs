import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach }, // coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistation, meta: { requiresAuth: true } }, // 로그인하지 않으면 접속할 수 없는 페이지
    { path: '/requests', component: RequestsReceived, meta: { requiresAuth: true } }, // 로그인하지 않으면 접속할 수 없는 페이지
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } }, // 로그인하면 더이상 접속할 수 없는 페이지
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

// to : 이동할 라우터
router.beforeEach(function(to, _, next) {
  // 이동하려고하는 페이지에 메타데이터로 requiresAuth가 true로 설정되어 있고 즉 네비게이션 가드가 걸려져 있고,
  // 인증되지 않은 유저라면 /auth 페이지로 리다이렉트되게 만든다. 
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');

    // 이동하려고 하는 페이지에 메타데이터로 requiresUnauth가 true로 설정되어 있고 즉 네비게이션 가드가 걸려져 있고,
    // 이미 로그인해서 인증된 유저라면 /coaches 페이지로 리다이렉트 되게 만든다. -> 현재 /auth 페이지로 이동하면 로그인 인증이 초기화되기 때문에 실제로 동작을 확인할 수 없다.
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');

  // 그 외의 (메타데이터가 없는) 경우 네비게이션 동작을 직행하도록 만든다.
  } else {
    next();
  }
});

export default router;
