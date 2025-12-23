<template>
    <div>
        <input type="text" ref="inputRef"></input>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'TemplateRef',
    setup() {
        const inputRef = ref(null) //inputRef should match with ref='inputRef' input box
        onMounted(() => {
            inputRef.value.focus();// since inputRef is of type ref so we are using value
        })
        return {
            inputRef
        }
    }
}
</script>

<style scoped></style>