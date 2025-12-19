v-b<template>
    <div>
        <h3> Full Name Using toref :- {{ firstName }} {{ lastName }}</h3>
        <!-- this will let vue to know about changes -->
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
    name: 'CompositionEx6',
    setup() {
        const name = reactive({
            firstName: 'rakesh',
            lastName: 'Singh'
        })

        setTimeout(() => {
            name.firstName = 'r',
                name.lastName = 'singh gkp'
        }, 2000);
        return toRefs(name)
    }

}
</script>

<style scoped></style>