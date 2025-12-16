<script setup>
import Greet from './components/GreetComp.vue';
import GreetCompWithProp from './components/GreetCompWithProp.vue';
import NonPropCompExample from './components/NonPropCompExample.vue';
import Product from './components/Product.vue';
</script>

<template>
  <Greet></Greet>
  <GreetCompWithProp empName="Rakesh"></GreetCompWithProp>
  <GreetCompWithProp empName="Suresh"></GreetCompWithProp>
  <Product productName="Samsung TV 55 inch" :productPrice="500" :inclusive-all="false"></Product>
  <NonPropCompExample id="testNonProp" productName="NonPropCompExample" :productPrice="500" :inclusive-all="false">
  </NonPropCompExample>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
