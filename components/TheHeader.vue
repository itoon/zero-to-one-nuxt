<template>
  <header>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          {{ title }}
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
export default {
  asyncData() {
    console.log("asyncData in components");
  },
  fetch() {
    console.log("fetch in header file");
    // this.title = "Welcome";
  },
  mounted() {
    this.title = "Welcome";
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px;
  background: red;
}
</style>
