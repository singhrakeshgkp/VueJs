<template>
    <div>
        <h3 @mouseover="increment">Mouseiver counter is :- {{ count }}</h3>
    </div>
</template>

<script>
import counterLib from '../lib/Counter';
export default {
    name: 'MouseoverCounter',
    mixins: [counterLib]
}
</script>

<style scoped></style>