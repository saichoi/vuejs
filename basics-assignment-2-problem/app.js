const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            confrimedValue: ''
        };
    },
    methods: {
        showAlert() {
            alert('Show alert');
        },
        setValue(event) {
            this.inputValue = event.target.value;
        },
        setConfrimValue() {
            this.confrimedValue = this.inputValue;
        }
    }
});

app.mount('#assignment');