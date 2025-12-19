<template>
    <div>
        <h3>With Simple Variable Name is :- {{ name }}</h3>
    </div>
</template>

<script>
export default {
    name: 'CompositionEx3',
    setup() {
        let name = 'rakesh'
        setTimeout(() => {
            name = 'rakesh singh'
            console.log(`after 2 second name value changes to :- ${name}`)
        }, 2000);
        return {
            name: name
        }
    }
}
</script>

<style scoped></style>