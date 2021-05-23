<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Hello, New Vue Thailand</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "LayoutWithHeaderFooter",
  async asyncData({ store }) {
    // don't store.state.isLoading = true
    // store.dispatch("setLoading"); action
    store.commit("SET_LOADING", true);
  },
  mounted() {
    // console.log("mounted");
    setTimeout(() => {
      this.$store.commit("SET_LOADING", false);
    }, 3000);
  }
};
</script>

<style lang="scss" scoped></style>
