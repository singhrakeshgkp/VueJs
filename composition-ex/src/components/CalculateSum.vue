<template>
    <div>
        <h3>Sum is (using ref) :- {{ sum }} </h3>
        <h3>Total is (using reactive) :- {{ total }} </h3>
        <button @click="addNums(25, 25)">Sum</button>
    </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue';
export default {
    setup() {
        const sum = ref(0)
        function addNums(num1, num2) {
            sum.value = num1 + num2;
            state.num1 = num1;
            state.num2 = num2;
            state.total = state.num1 + state.num2;
        }

        const state = reactive({
            num1: 0,
            num2: 0,
            total: 0
        })

        return {
            addNums,
            sum,
            ...toRefs(state)// we have to use spread operator if multi statement in return, spread operator here will expose individual property

        }
    }
}
</script>

<style scoped></style>