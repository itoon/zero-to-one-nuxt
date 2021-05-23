<template>
  <v-container>
    <v-row>
      <v-col>
        <BaseButton @sendEmit="click"></BaseButton>
        <h1>{{ number }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    click() {
      this.number = this.number + 1;
    }
  },
  data() {
    return {
      number: 0
    };
  }
};
</script>
