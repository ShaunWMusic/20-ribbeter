<template lang="html">
  <div class="">
    <router-view
      :message="messages"
        @findAllPosts="findAllPosts"
        @findPost="findPost"
    ></router-view>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      ribbits: [],
    };
  },

  mounted() {
    this.findAllPosts();
  },

  methods: {
    findAllPosts() {
      fetch('/api/ribbit', {
        credentials: 'same-origin',
      })
        .then((r) => r.json())
        .then((posts) => {
          this.posts = posts;
        });
    },

    findPost() {

    },

  },
};
</script>
