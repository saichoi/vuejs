<template>
    <div id="exercise">
    <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
    <div>
        <button @click="startEffect">Start Effect</button>
        <div id="effect" :class="effectClasses"></div>
    </div>

    <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
    <div :class="['text-blue', 'bg-yellow']">I got no class :(</div>

    <!-- 3) Let the user enter a class (create some example classes) and attach it -->
    <div>
        <input type="text" v-model="userClass">
        <div :class="[{visible: true}, userClass]">{{ userClass }}</div>
    </div>

    <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
    <div>
        <input type="text" v-model="userClass">
        <input type="checkbox" v-model="isVisible">
        <div v-if="isVisible" :class="[{visible: isVisible}, userClass]">{{ userClass }}</div>
    </div>

    <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
    <div>
        <input type="text" v-model="myStyle.backgroundColor">
        <div :style="myStyle"></div>
    </div>

    <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
    <div>
        <button @click="startProgress">Start Progress</button>
        <div :class="['progress-bar']" :style="progressBar"></div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            effectClasses: {
                highlight: false,
                shrink: true
            },
            userClass: '',
            isVisible: true,
            myStyle: {
                backgroundColor: 'gray',
                width: '100px',
                height: '150px'
            },
            progressBar: {
                width: 0,
                backgroundColor: 'red'
            }
        }
    },
    methods: {
        startEffect() {
            this.effectClasses.highlight = !this.effectClasses.highlight;
            this.effectClasses.shrink = !this.effectClasses.shrink;
        },
        startProgress() {
            let width = 0;
            setInterval(() => {
                width += 10
                this.progressBar.width = width + 'px';
            }, 500);
        }
    }
}
</script>

<style>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}

.bg-yellow {
    background-color: yellow;
}

.text-blue {
    color: blue;
}

.visible {
  width: 100px;
  height: 50px;
}

.progress-bar {
  width: 200px;
  height: 20px;
  border: 1px solid black;
}
</style>