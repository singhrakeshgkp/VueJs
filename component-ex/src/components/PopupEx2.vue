<template>
    <div>
        <h3>validate Emitted event </h3>
        <input type="text" v-model="customerName"></input>
        <button @click="$emit('close', customerName)">Close</button>
    </div>
</template>

<script>
export default {
    name: 'PopupEx2',
    emits: { //validate if name is present
        close: (customerName) => {
            if (!customerName) {
                return false
            } else {
                return true;
            }
        }
    },
    data() {
        return {
            customerName: ''
        }
    }
}
</script>

<style scoped></style>