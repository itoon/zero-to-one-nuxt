<template>
  <v-container>
    <v-row>
      <v-col>
        <ul>
          <li v-for="item in posts" :key="item.id">
            <n-link to="/posts/1">
              {{ item.title }}
            </n-link>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
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
  }
};
</script>

<style lang="scss" scoped></style>
