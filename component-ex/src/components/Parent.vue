<template>
    <div>
        <h3>Parent Component</h3>
        <Child v-if="showChild"></Child>
        <button @click="showChild = !showChild" style="background-color: lightblue;">Toggle Child</button>
    </div>
</template>

<script>
import Child from './Child.vue';

export default {
    components: {
        Child
    },
    name: 'Parent',
    data() {
        return {
            showChild: true
        }
    },
    beforeCreate() {
        console.log('Parent beforeCreate()')
    },
    created() {
        console.log('Parent created()')
    },
    beforeMount() {
        console.log('Parent beforeMount()')
    },
    mounted() {
        console.log('Parent mounted()')
    },
    beforeUpdate() {
        console.log('Parent beforeUpdate()')
    },
    updated() {
        console.log('Parent updated()')
    },
    beforeUnmount() {
        console.log('Parent beforeUnmount()')
    },
    unmounted() {
        console.log('Parent unmounted()')
    }
}
</script>

<style scoped></style>