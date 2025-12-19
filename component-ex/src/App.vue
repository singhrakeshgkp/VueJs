<script>
import MouseClickCounter from './components/MouseClickCounter.vue';
import MouseoverCounter from './components/MouseoverCounter.vue';
import Parent from './components/Parent.vue';
import PostList from './components/PostList.vue';
import PostListOnPageLoad from './components/PostListOnPageLoad.vue';
import TemplateRef from './components/TemplateRef.vue';




export default {
  name: 'App',
  components: {
    PostList,
    Parent,
    PostListOnPageLoad,
    TemplateRef,
    MouseClickCounter,
    MouseoverCounter
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

  <!-- <PostList></PostList> -->
  <!-- <Parent></Parent>
  <PostListOnPageLoad></PostListOnPageLoad> -->
  <!-- <TemplateRef></TemplateRef> -->
  <MouseClickCounter></MouseClickCounter>
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
