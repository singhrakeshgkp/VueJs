<template>
    <div>
        <h3>Content from Component A</h3>
        <input type="text" v-model="about"></input>
    </div>
</template>

<script>
export default {
    name: 'CompA',
    data() {
        return {
            about: ''
        }
    }
}
</script>

<style scoped></style>