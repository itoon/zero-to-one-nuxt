<template>
  <div id="welcome">
    Welcome <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue News Thailand"
    };
  }
};
</script>

<style lang="scss" scoped>
#welcome {
  background: #f9f9f9;
}
</style>
