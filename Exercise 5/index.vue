<template>
    <div id="exercise">
        <!-- 1) Hook up the button to toggle the display of the two paragraphs. Use both v-if and v-show and inspect the elements to see the difference -->
        <div>
            <button @click="toggle">Toggle</button>
            <p v-if="isShown">You either see me ...</p>
            <p v-else>...or me</p>
            <p v-show="isShown">You either see me ...</p>
            <p v-show="!isShown">...or me</p>
        </div>

        <!-- 2) Output an <ul> of array elements of your choice. Also print the index of each element. -->
        <ul v-for="(element, index) in array" :key="index">
            <li>{{ element }} - {{ index }}</li>
        </ul>
        
        <!-- 3) Print all key-value pairs of the following object: {title: 'Lord of the Rings', author: 'J.R.R. Tolkiens', books: '3'}. Also print the index of each item. -->
        <ul v-for="(value, keyName, index) in myObject" :key="index">
            <li>{{ value }} - {{ keyName }} - {{ index }} </li>
        </ul>

        <!-- 4) Print the following object (only the values) and also create a nested loop for the array: {name: 'TESTOBJECT', data: [1.67, 1.33, 0.98, 2.21]} (hint: use v-for and v-if to achieve this) -->
        <ul>
            <li v-for="value in testData" :key="value.id">
                <template v-if="Array.isArray(value)">
                    <div v-for="element in value" :key="element">{{ element }}</div>
                </template>
                <template v-else>
                    {{ value }}
                </template>
            </li>
        </ul>
        </div>

</template>

<script>
export default {
    data() {
        return {
            isShown: false,
            array: ['Max', 'Anna', 'Chris', 'Manu'],
            myObject: {
                title: 'Lord of the Rings',
                author: 'J.R.R. Tolkiens',
                books: '3'
            },
            testData: {
                name: 'TESTOBJECT', 
                id: 10,
                data: [1.67, 1.33, 0.98, 2.21]
            }
        }
    },
    methods: {
        toggle() {
            this.isShown = !this.isShown
        }
    }
}
</script>