<template>
  <v-container>
    <v-row>
      <v-col>
        {{ post }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const slug = route.params.slug;
    try {
      const res = await $axios.get(
        `https://jsonplaceholder.typicode.com/posts/1`
      );
      return {
        post: res.data
      };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
