<template>
    <div>
        <h3>Using Ref Name is :- {{ name }}</h3>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'CompositionEx4',
    setup() {
        const name = ref('rakesh');
        setTimeout(() => {
            name.value = 'rakesh singh'
        }, 2000);

        return {
            name
        }
    }

}
</script>

<style scoped></style>