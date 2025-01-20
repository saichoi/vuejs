import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFotoer from './components/teams/TeamsFotoer.vue';
import UsersFotoer from './components/users/UsersFotoer.vue';

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        { path: '/', redirect: '/teams'},
        { 
            name: 'teams', 
            path: '/teams', 
            components: { default: TeamsList, footer: TeamsFotoer }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props:true },// props: ture -> id를 전달하도록 유도한다.
            ] 
        }, // alias: '/' 옵션을 사용하면 도메인에서 /team와 동일한 화면을 보여준다.
        { 
            path: '/users', 
            components: {
                default: UsersList, footer: UsersFotoer
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter');
                console.log(to, from);
                next();
            }
        },
        // { path: '/:notFoudn(.*)', redirect: '/teams'}
        { path: '/:notFoudn(.*)', component: NotFound } // 마지막에 작성해서 최종 수단으로 사용한다.
    ],
    linkActivClass: 'router-link-active',

    // 페이지가 바뀔 때 마다 호출
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition);
        // 이전 페이지로 이동할 경우 이전 페이지의 마지막 위치로 이동
        if (savedPosition) {
            return savedPosition;
        }

        // 그 외의 모든 경우에는 페이지 탑으로 이동
        return { left: 0, top: 0 }
    }
});

// 전역 가드
router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from);
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({ name: 'team-members', params: { teamId: 't2' }});
    // }
    next();
});

const app = createApp(App)

app.use(router); 

app.mount('#app');
