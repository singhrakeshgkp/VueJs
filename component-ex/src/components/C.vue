<template>
    <div>
        <h3>Component C</h3>
        <CompE></CompE>
    </div>
</template>

<script>
import CompE from './E.vue';
export default {
    name: 'CompC',
    components: {
        CompE
    }
}
</script>

<style scoped></style>