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
  validate({ params, query, store }) {
    return !Number.isNaN(parseInt(params.id));
  },
  async mounted() {
    console.log(this.$route);
    const id = this.$route.params.id;
    try {
      const res = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(res);
      this.post = res.data;
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      post: null
    };
  }
};
</script>

<style lang="scss" scoped></style>
