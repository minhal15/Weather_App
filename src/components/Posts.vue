<template>
    <div>
      <h1>Posts</h1>
      <div v-for="post in filteredPosts" :key="post.id">
        <p>
          The todo by user {{ post.userId }} with the title "{{ post.title }}" completion status is: {{ post.completed }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      this.fetchPosts();
    },
    computed: {
      filteredPosts() {
        const postIds = [6, 15];
        return this.posts.filter((post) => postIds.includes(post.id));
      },
    },
    methods: {
      fetchPosts() {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((posts) => {
            this.posts = posts;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
  </script>
  