<template>
    <div>
        <button @click="triggerClickEventToParent" style="background-color: lightblue;">Send Event to parent
            Comp</button>
    </div>
</template>

<script>
export default {
    name: 'EventChildComp',
    setup(props, context) {
        function triggerClickEventToParent() {
            context.emit('testClickEvent', 'rakesh singh')//emit takes two arguemnt first eventName it could be anything, and second value we want to pass
        }
        return {
            triggerClickEventToParent
        }
    }

}
</script>

<style scoped></style>