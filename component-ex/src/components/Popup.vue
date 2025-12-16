<template>
    <div>
        <h3>This is custom event example</h3>
        <button @click="$emit('close', 'rakesh singh')">Close</button>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    emits: ['close']
}
</script>

<style scoped></style>