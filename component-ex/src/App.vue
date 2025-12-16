<script>
import CompC from './components/C.vue';
import Popup from './components/Popup.vue';
import PopupEx2 from './components/PopupEx2.vue';
export default {
  name: 'App',
  components: {
    CompC,
    Popup,
    PopupEx2
  },
  data() {
    return {
      custName: 'rakesh singh',
      showPopup: false,
      showPopupEx2: false
    }

  },
  methods: {
    closePopup(customerName) {
      console.log(`customer name is ${customerName}`)
      this.showPopup = false
    },

    closePopupEx2(customerName) {
      console.log(`customer name is ${customerName}`)
      this.showPopupEx2 = false
    }
  },
  /* provide: {
    customerName: 'rakesh singh'
  } */
  provide() {
    return {
      customerName: this.custName
    }
  }
}
</script>

<template>
  <h3>Name from Component App {{ custName }}</h3>
  <CompC></CompC>
  <h3>Custom Component Example</h3>
  <hr />
  <!-- <Popup v-show="showPopup" @close="showPopup = false"></Popup>  if not passing any object -->
  <Popup v-show="showPopup" @close="closePopup"></Popup>
  <button @click="showPopup = true">Show Popup</button>

  <PopupEx2 v-show="showPopupEx2" @close="closePopupEx2"></PopupEx2>
  <button @click="showPopupEx2 = true">Show Popup Ex2</button>

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
