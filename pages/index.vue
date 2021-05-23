<template>
  <div>
    <TheHeader />
    <main>
      <BaseCard2
        :image="card.courseImage"
        :title="card.courseTitle"
        :desc="card.courseDesc"
      ></BaseCard2>
    </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: {
        courseTitle: "officia porro iure quia iusto qui ipsa ut modi",
        courseDesc: "reprehenderit est deserunt velit ipsam",
        courseImage: "https://via.placeholder.com/150/24f355"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  background: pink;
}
</style>
