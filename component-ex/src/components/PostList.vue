<template>
    <div>
        <button @click="getPosts">Get Data</button>
        <h3 v-if="errorMsg">{{ errorMsg }}</h3>
        <div v-for="post in posts">
            <h3>Title {{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PostList',
    data() {
        return {
            posts: [],
            errorMsg: ''
        }
    },
    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    console.log(res);
                    this.posts = res.data;
                })
                .catch(error => {
                    console.log(error);
                    this.errorMsg = "Error occurred while retrieving data"
                    console.log(this.errorMsg)
                })
        }
    }
}
</script>

<style scoped></style>