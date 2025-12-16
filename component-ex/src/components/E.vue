<template>
    <div>
        <h3>Component E</h3>
        <CompF></CompF>
    </div>
</template>

<script>
import CompF from './F.vue';
export default {
    name: 'CompE',
    components: {
        CompF
    }
}
</script>

<style scoped></style>