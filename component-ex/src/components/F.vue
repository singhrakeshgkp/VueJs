<template>
    <div>
        <h3>Component F :- Welcome {{ customerName }}</h3>
    </div>
</template>

<script>
export default {
    name: 'CompF',
    inject: ['customerName']
}
</script>

<style scoped></style>