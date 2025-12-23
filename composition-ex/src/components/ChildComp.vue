<template>
    <div>
        <h3> (using props) Welcome {{ firstName }} {{ lastName }}</h3>
        <h3> (using props + Computed property) Welcome {{ fullName }}</h3>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'ChildComp',
    props: ['firstName', 'lastName'],
    setup(props) {
        const fullName = computed(() => {
            return `${props.firstName} ${props.lastName}` // we can not write code like `${this.firstName} ${this.lastName}` here u will get error as this keyword will be undefined
            // as setup function gets called very early state of component lifecycle, thats why we added props in setup(props), vuejs automatically pass it
        })

        return {
            fullName
        }
    }
}
</script>

<style scoped></style>