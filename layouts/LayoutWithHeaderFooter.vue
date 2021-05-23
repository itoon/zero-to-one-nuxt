<template>
  <div id="b">
    <TheHeader></TheHeader>
    <BaseLoading v-if="$store.getters.getIsLoading"></BaseLoading>
    <nuxt></nuxt>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
