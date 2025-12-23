<template>
    <div>
        <h3 @mouseover="incrementCount">Mouseiver counter is :- {{ count }}</h3>
    </div>
</template>

<script>
import useCounter from '../composables/useCounter';
export default {
    name: 'MouseoverCounter',
    setup() {
        const { count, incrementCount } = useCounter(50, 5)
        return {
            count,
            incrementCount
        }
    }
}
</script>

<style scoped></style>