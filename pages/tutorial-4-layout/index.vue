<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Using Layout: LayoutWithHeader</h1>
        <ul>
          <li>
            <n-link to="/tutorial/tutorial-4-layout"
              >Using Layout: LayoutWithHeader</n-link
            >
          </li>
          <li>
            <n-link to="/tutorial/tutorial-4-layout/layout-with-footer"
              >Using Layout: LayoutWithHeaderFooter</n-link
            >
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "LayoutWithHeader"
};
</script>

<style lang="scss" scoped></style>
