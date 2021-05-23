<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const res = await $axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return {
        posts: res.data
      };
    } catch (error) {
      console.log(error);
    }
  },
  async fetch() {
    try {
      const res = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.posts = res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
