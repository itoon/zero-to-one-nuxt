<template>
  <button class="btn" @click="sendEmit">
    Button
  </button>
</template>

<script>
export default {
  methods: {
    sendEmit() {
      this.$emit("sendEmit");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 20px;
  background: #3620fe;
  color: #fff;
  margin: 20px 0;
}
</style>
