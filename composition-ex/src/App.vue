<script>
import CompositionEx1 from './components/CompositionEx1.vue';
import CompositionEx2 from './components/CompositionEx2.vue';
import CompositionEx3 from './components/CompositionEx3.vue';
import CompositionEx4 from './components/CompositionEx4.vue';
import CompositionEx5 from './components/CompositionEx5.vue';
import CompositionEx6 from './components/CompositionEx6.vue';
export default {
  name: 'App',
  components: {
    CompositionEx1,
    CompositionEx2,
    CompositionEx3,
    CompositionEx4,
    CompositionEx5,
    CompositionEx6
  },
  data() {
    return {

    }

  },
  methods: {
  }
}
</script>

<template>
  <h2>Compositon Render Name using Ref and Option data() api</h2>
  <hr />
  <CompositionEx1></CompositionEx1>
  <h2>Compostion Render name using reactive</h2>
  <hr />
  <CompositionEx2></CompositionEx2>

  <h2>Composition - Reactivity and toRefs</h2>
  <hr />
  <CompositionEx3></CompositionEx3>
  <CompositionEx4></CompositionEx4>
  <CompositionEx5></CompositionEx5>
  <CompositionEx6></CompositionEx6>
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
