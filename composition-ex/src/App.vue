<script>
import CalculateSum from './components/CalculateSum.vue';
import ComputedEx from './components/ComputedEx.vue';
import WatchersEx from './components/WatchersEx.vue';
import WatchersEx2 from './components/WatchersEx2.vue';


export default {
  name: 'App',
  components: {
    CalculateSum,
    ComputedEx,
    WatchersEx,
    WatchersEx2
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
  <h2>Compute Sum </h2>
  <hr />
  <CalculateSum></CalculateSum>
  <ComputedEx></ComputedEx>
  <WatchersEx></WatchersEx>
  <WatchersEx2></WatchersEx2>



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
