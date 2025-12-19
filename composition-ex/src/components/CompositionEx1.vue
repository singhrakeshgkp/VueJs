<template>
    <div>
        <h3>Using Option. :- {{ firstName }}</h3>
        <h3>Using Compositon Ref :- {{ fullName }}</h3>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'CompositionEx1',
    setup() {
        //to create equivalent firstName property in using composition we will use ref(this ref is different from html element reference)
        const firstName = ref('Rakesh');
        firstName.value = 'RAKESH'
        // Initially ref returned ref to rakesh singh string in firstName ref, in this line we are chaning value, since its object we are using
        //firstName.value to change its value. But in <h3> tag we have not used it, vue will automatically unwrap value from it.
        const lastName = ref('SINGH')
        const fullName = `${firstName.value} ${lastName.value}`

        console.log(firstName.value)
        return {
            fullName: fullName
        }
    },
    /* here data() is part of Option api and setUp() is part of composition api*/
    data() {
        return {
            firstName: 'Rakesh'
        }
    }
}
</script>

<style scoped></style>