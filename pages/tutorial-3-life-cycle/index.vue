<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
  asyncData() {
    console.log("asyncData");
  },
  created() {
    console.log("created");
    // this.title = "Welcome";
  },
  fetch() {
    // this.title = "Welcome";
    console.log("fetch");
  },
  mounted() {
    // this.title = "Welcome";
  },
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
