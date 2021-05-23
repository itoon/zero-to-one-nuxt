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
  async mounted() {
    console.log(this.$route);
    const id = this.$route.params.id;
    try {
      const res = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
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
