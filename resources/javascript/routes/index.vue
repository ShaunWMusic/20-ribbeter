<template lang="html">
  <div class="">
    <h2 class="header-users">Recent Ribbits</h2>
    <div class="grid">
      <div class="grid__item">
      <div class="card">
          <h2>New Ribbit</h2>
          <div class="grid__item--input">
        <p>What's Going On?</p>
        <textarea v-model="message" name="name" rows="8" cols="40"></textarea>
              </div>
              <div class="grid__item--btns">
        <button class="btn">Clear</button>
        <button class="btn btn--primary">Save</button>
              </div>
      </div>
      </div>
      <div class="grid__item">
        <h2>See What's Happening!</h2>
      <div class="grid-item__results">
        <p>Load New Ribbits</p>
        <div class="grid-item__ribbits">
        <ul>
          <li v-for="post in posts">
            {{ post.username }}
          </li>
        </ul>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  prop: ['posts'],
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
