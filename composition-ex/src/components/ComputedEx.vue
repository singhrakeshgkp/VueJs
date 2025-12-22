<template>
    <div>
        <h3>Compute Full Name using Ref</h3>
        <hr />
        <input type="text" v-model="refFName"></input>
        <input type="text" v-model="refLName"></input>
        <h4>Full name is :- {{ refFullName }}</h4>

        <h3>Compute Full Name using reactive</h3>
        <hr />
        <input type="text" v-model="reactiveFName"></input>
        <input type="text" v-model="reactiveLName"></input>
        <h4>Full name is :- {{ reactivFullName }}</h4>
    </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue';

export default {
    name: 'ComputedEx',
    setup() {

        /* Using ref */
        const refFName = ref('')
        const refLName = ref('')
        const refFullName = computed(function () {
            return `${refFName.value} ${refLName.value}`
        })
        /* Using reactive  */
        const state = reactive({
            reactiveFName: '',
            reactiveLName: ''
        })

        const reactivFullName = computed(function () {
            return `${state.reactiveFName} ${state.reactiveLName}`
        })

        return {
            refFName,
            refLName,
            refFullName,
            ...toRefs(state),
            reactivFullName
        }

    }
}
</script>

<style scoped></style>