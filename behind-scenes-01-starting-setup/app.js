const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
      
    },
  },
  beforeCreate() {
    console.log('beforeCreated()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('breforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('breforeUpdated()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('unmounted()');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000); 

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza"
    }
  }
});

app2.mount('#app2');