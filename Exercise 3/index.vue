<template>
    <div id="exercise">
        <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
        <div>
            <p>Current Value: {{ value }}</p>
            <button @click="addFive">Add 5</button>
            <button @click="addOne">Add 1</button>
            <p>{{ result }}</p>
        </div>
        <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
        <div>
            <input type="text">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
            result: '',
        }
    },
    computed: {
      result() {
        if (this.value === 37) {
          return 'done';
        } else {
          return 'not there yet'
        }
      }
    },
    watch: {
      value(newValue) {
        if (newValue === 37) {
          setTimeout(() => {
            this.value = 0;
          }, 5000)
        }
      }
    },
    methods: {
        addFive() {
            this.value += 5;
        },
        addOne() {
            this.value += 1;
        }
    }
}
</script>