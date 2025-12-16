<template>
    <div>
        <h3>Product Details - </h3>
        <p v-bind="$attrs"> Product name :- {{ productName }}</p>
        <p>Product price:- {{ productPrice }}</p>
        <p> Inclusive All:- {{ inclusiveAll }}</p>
    </div>
</template>

<script>
export default {
    name: 'NonPropCompExample',
    props: {
        productName: {
            type: String,
            required: true
        },
        productPrice: Number,
        inclusiveAll: {
            type: Boolean,
            default: true
        }
    }, inheritAttrs: false
}
</script>

<style scoped></style>