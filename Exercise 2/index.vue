<template>
    <div id="exercise">
        <!-- 1) Show an alert when the Button gets clicked -->
        <div>
            <button @click="showAlert">Show Alert</button>
        </div>
        <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
        <div>
            <input type="text" @keydown="handleKeydown">
            <p>{{ value1 }}</p>
        </div>
        <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
        <div>
            <input type="text" @keydown="handleEnter">
            <p>{{ value2 }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        value1: '',
        value2: ''
      }
    },
    methods: {
      showAlert() {
        alert('show alert');
      },
      handleKeydown(event) {
        this.value1 = event.target.value;
      },
      handleEnter(event) {
        if (event.key === 'Enter') {
          this.value2 = event.target.value;
        }
      }
    }
}
</script>