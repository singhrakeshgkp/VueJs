<template>
    <div>
        <input type="text" placeholder="First Name" v-model="firstName"></input>
        <input type="text" placeholder="Last Name" v-model="lastName"></input>
        <ChildComp :firstName="firstName" :lastName="lastName"></ChildComp>
    </div>
</template>

<script>
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';

export default {
    components: {
        ChildComp,
    },
    name: 'ParentComp',
    setup() {
        const firstName = ref('')
        const lastName = ref('')
        return {
            firstName,
            lastName
        }
    }
}
</script>

<style scoped></style>