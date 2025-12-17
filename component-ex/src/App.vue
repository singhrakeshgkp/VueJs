<script>
import Input from './components/Input.vue';
import SlotEx from './components/SlotEx.vue';
import SlotEx2 from './components/SlotEx2.vue';
import TechStack from './components/TechStack.vue';

export default {
  name: 'App',
  components: {
    Input,
    SlotEx,
    SlotEx2,
    TechStack
  },
  data() {
    return {
      customerName: ''
    }

  },
  methods: {
  },
}
</script>

<template>
  <Input v-model="customerName"></Input><br /><br />
  <SlotEx>My First Test Content</SlotEx>
  <SlotEx>
    <h3>My Second Test Content</h3>
  </SlotEx>


  <h1>Multiple Slots in same file/ Named Slot Example</h1>
  <hr />
  <SlotEx2>
    <template v-slot:header>
      <h2>Header</h2>
    </template>

    <template v-slot:default>
      <h2>Main</h2>
    </template>

    <template v-slot:footer>
      <h2>Footer</h2>
    </template>
  </SlotEx2>

  <h3>Slots With Prop </h3>
  <hr />
  <TechStack>
    <template v-slot:default="slotProps">
      {{ slotProps.framework }} {{ slotProps.language }}
    </template>
  </TechStack>

  <TechStack>
    <template v-slot:default="slotProps">
      {{ slotProps.language }}
    </template>
  </TechStack>
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
