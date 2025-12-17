<script>
import CompA from './components/CompA.vue';
import CompB from './components/CompB.vue';
import CompC from './components/CompC.vue';



export default {
  name: 'App',
  components: {
    CompA,
    CompB,
    CompC
  },
  data() {
    return {
      activeTab: 'CompA'
    }

  },
  methods: {
  }
}
</script>

<template>

  <button @click="activeTab = 'CompA'">Component A</button>
  <button @click="activeTab = 'CompB'">Component B</button>
  <button @click="activeTab = 'CompC'">Component C</button>

  <!--   <CompA v-if="activeTab === 'CompA'"></CompA>
  <CompB v-if="activeTab === 'CompB'"></CompB>
  <CompC v-if="activeTab === 'CompC'"></CompC> -->

  <!-- above approach is not efficient way, what if we have more than 100 link or nav we have to add 100 if, use following approach -->
  <!-- <component :is="activeTab"></component>  First example without cache-->

  <KeepAlive>
    <component :is="activeTab"></component>
  </KeepAlive>
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
