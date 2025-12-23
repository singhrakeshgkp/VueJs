<template>
    <div>
        <button @click="incrementCount" style="background-color: lightblue;">count: - {{ count }}</button>
    </div>
</template>

<script>
import useCounter from '../composables/useCounter';
export default {
    name: 'MouseClickCounter',
    setup() {
        const { count, incrementCount } = useCounter()
        return {
            count,
            incrementCount
        }
    }
}
</script>

<style scoped></style>