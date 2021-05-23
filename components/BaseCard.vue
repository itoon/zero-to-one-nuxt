<template>
  <div class="card">
    <img :src="card.image" alt="" />
    <h1>{{ card.title }}</h1>
    <p>{{ card.desc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    card: Object
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 20px 0;
}
</style>
