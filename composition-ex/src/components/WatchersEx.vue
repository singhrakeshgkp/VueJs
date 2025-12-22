<template>
    <div>
        <h3>Watchers Example using ref</h3>
        <hr>
        </hr>
        <input type="tex" v-model="refFName"></input>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'WatchersEx',
    setup() {
        const refFName = ref('')
        watch(refFName, (newValue, oldValue) => {
            console.log('old value ', oldValue)
            console.log('new value ', newValue)
        }, {
            immediate: true
        })

        return {
            refFName
        }
    }

}
</script>

<style scoped></style>