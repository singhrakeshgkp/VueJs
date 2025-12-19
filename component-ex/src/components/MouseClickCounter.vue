<template>
    <div>
        <button @click="increment" style="background-color: lightblue;">count: - {{ count }}</button>
    </div>
</template>

<script>
import counterLib from '../lib/Counter';
export default {
    name: 'MouseClickCounter',
    mixins: [counterLib]
}
</script>

<style scoped></style>