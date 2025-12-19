<template>
    <div>
        <h3>With Reactive , name suing variable name.fullName :- {{ name.fullName }}</h3>
        <h3>With Reactive name (using property firstAndLastName )is :- {{ firstAndLastName }}</h3>
        <!-- vue will not know about change even after 2 secon dispaly initial value to fix it we will use toref refer CompositionEx6.vue -->
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'CompositionEx5',
    setup() {
        const name = reactive({
            fullName: 'rakesh'
        })

        setTimeout(() => {
            name.fullName = 'rakesh singh'
        }, 2000);
        return {
            name,
            firstAndLastName: name.fullName
        }
    }

}
</script>

<style scoped></style>