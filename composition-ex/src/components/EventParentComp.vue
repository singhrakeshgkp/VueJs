<template>
    <div>
        <EventChildComp @testClickEvent="msg"></EventChildComp>
    </div>
</template>

<script>
import EventChildComp from './EventChildComp.vue';

export default {
    name: 'EventParentComp',
    components: {
        EventChildComp
    },
    setup() {
        function msg(msg) {
            alert(` welcome ${msg}`)
        }
        return {
            msg
        }
    }
}
</script>

<style scoped></style>