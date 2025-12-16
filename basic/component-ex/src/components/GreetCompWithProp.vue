<template>
    <h3>Welcome {{ empName }}</h3>
</template>

<script>
export default {
    name: "GreetCompWithProp",
    props: ['empName']
}
</script>

<style scoped></style>