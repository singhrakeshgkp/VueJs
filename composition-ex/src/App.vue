<script>
import EventParentComp from './components/EventParentComp.vue';
import MouseClickCounter from './components/MouseClickCounter.vue';
import MouseoverCounter from './components/MouseoverCounter.vue';
import ParentComp from './components/ParentComp.vue';
import TemplateRef from './components/TemplateRef.vue';



export default {
  name: 'App',
  components: {
    ParentComp,
    TemplateRef,
    EventParentComp,
    MouseoverCounter,
    MouseClickCounter
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
  <h2>Template Ref Compostion</h2>
  <hr />
  <TemplateRef></TemplateRef>
  <h2>Props in Compostion</h2>
  <hr />
  <ParentComp></ParentComp>
  <h2>Emit Event from child parent (Custom Event)</h2>
  <hr />
  <EventParentComp></EventParentComp>

  <h2>Counter Example - mouse click</h2>
  <hr />
  <MouseClickCounter></MouseClickCounter>
  <h2>Counter Example - mouseover</h2>
  <hr />
  <MouseoverCounter></MouseoverCounter>

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
