<template>
    <div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        modelValue: String
    }
}
</script>

<style scoped>
input[type='text'] {
    display: block;
    border-radius: 4px;
    width: 400px;
    padding: 6px 12px;
}
</style>