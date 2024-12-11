const app = Vue.createApp({
    data() {
        return {
            name: 'Choi Dahye',
            age: '31',
            imageUrl: 'https://i.namu.wiki/i/NvrQ0rbpS19jVsaYu_9aiBE09C-xwn3YXi9U9zGJHeCLavO7j6-JBdodJWPU_nbS8_94b67_Ibdy5XTDaNupMw.webp'
        };
    },
    methods: {
        calculateAge() {
            return Number(this.age) + 5;
        },
        calculateRandom() {
            return Math.round(Math.random());
        }
    }
});

app.mount('#assignment');