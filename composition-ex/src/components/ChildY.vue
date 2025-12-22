<template>
    <div>
        <h1>Child Y</h1>
        <hr />
        <ChildZ></ChildZ>
    </div>
</template>

<script>
import ChildZ from './ChildZ.vue';

export default {
    components: {
        ChildZ
    },
    name: 'ChildY'
}
</script>

<style scoped></style>