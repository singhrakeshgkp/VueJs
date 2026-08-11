<template>
    <div>
        <span>{{ name }}</span>
        <span>{{ email }}</span>
        <p> You can reach out us on r.singh@abc.com</p>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Contactus',
    props: {
        name: {
            type: String
        },
        email: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped></style>