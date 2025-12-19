<template>
    <div>
        <h3>Using Compositon Reactive :- {{ fullName }}</h3>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'CompositionEx2',
    setup() {

        const name = reactive({ //reactive accept object
            firstName: 'RAKESH',
            lastName: 'SINGH'
        })
        const fullName = `${name.firstName} ${name.lastName}`
        return {
            fullName: fullName
        }
    }
}
</script>

<style scoped></style>