<template>
    <div id="exercise">
        <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
        <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
        <!-- 2) Output your age, multiplied by 3 -->
        <p>{{ age * 3 }}</p>
        <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
        <p>{{ Math.random() }}</p>
        <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
        <div>
            <img :src="image" style="width:100px;height:100px">
        </div>
        <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
        <div>
            <input type="text" :value="name">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Dahye',
            age: 32,
            image: 'https://cdn.animaltoc.com/news/photo/202410/1409_6515_3838.jpg'
        }
    }
}
</script>