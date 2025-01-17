import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        { path: '/', redirect: '/teams'},
        { path: '/teams', component: TeamsList, children: [
                { path: ':teamId', component: TeamMembers, props:true },// props: ture -> id를 전달하도록 유도한다.
            ] 
        }, // alias: '/' 옵션을 사용하면 도메인에서 /team와 동일한 화면을 보여준다.
        { path: '/users', component: UsersList},
        // { path: '/:notFoudn(.*)', redirect: '/teams'}
        { path: '/:notFoudn(.*)', component: NotFound } // 마지막에 작성해서 최종 수단으로 사용한다.
    ],
    linkActivClass: 'router-link-active'
});

const app = createApp(App)

app.use(router); 

app.mount('#app');
