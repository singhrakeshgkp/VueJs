<template>
    <div>
        <h4>Counter: - {{ count }}</h4>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';

export default defineComponent({

    name: 'Counter',
    setup() {
        const count: Ref<number> = ref<number>(0);
        const increment = () => count.value++
        const decrement = () => count.value--
        return {
            count,
            increment,
            decrement,
        }
    }
})
</script>

<style lang="scss" scoped></style>