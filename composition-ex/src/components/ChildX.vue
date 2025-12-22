<template>
    <div>
        <h1>Child X</h1>
        <hr />
        <ChildY></ChildY>
    </div>
</template>

<script>
import ChildY from './ChildY.vue';

export default {
    components: {
        ChildY
    },
    name: 'ChildX'
}
</script>

<style scoped></style>