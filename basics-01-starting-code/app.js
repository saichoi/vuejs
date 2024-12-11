const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the cource and learn Vue!',
            courceGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courceGoalB;
            }
        }
    }
});

app.mount('#user-goal');