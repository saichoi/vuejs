import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: AllUsers },
        { path: '/goals', component: CourseGoals }
    ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// 적절한 페이지가 로드되고 이를 라우터가 성공적으로 확인했을 때 알려준다.
router.isReady().then(function() {
    // 라우터가 완전히 설정되고 로드할 때 페이지를 인식한 후에만 실행 -> 초기 애니메이션 실행 방지
    app.mount('#app');
});

