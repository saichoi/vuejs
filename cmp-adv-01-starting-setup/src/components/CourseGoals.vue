<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <!-- 주의 -->
            <!-- :를 붙이지 않으면 텍스트를 그대로 넘겨준다. -->
            <!-- :를 붙이면 변수를 넘겨준다. -->
            <!-- another-prop 와 같이 -를 사용한 프로퍼티를 사용할 수 없다. -->
            <slot :item="goal" antoherProp="..."></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Finish the course', 'Learn Vue'],
        }
    }
}
</script>