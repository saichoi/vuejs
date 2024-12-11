const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredTaskValue: '',
            isVisible: true,
        }
    },
    computed: {
        buttonText() {
            return this.isVisible ? 'Hide' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = '';
        },
        toggleButton() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount("#assignment");