<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ firstName }} {{ lastName }}</h1>
        <h1>{{ fullName }}</h1>
        {{ watcher }}
        <button class="btn" @click="click">Click Me!!!</button>
        <h1>{{ number }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  watch: {
    firstName(newVal, oldVal) {
      console.log("newVal: " + newVal);
      console.log("oldVal: " + oldVal);
      this.watcher = newVal;
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    click() {
      console.log("click");
      this.number++;
    }
  },
  data() {
    return {
      firstName: "Songklod",
      lastName: "Saengvoratip",
      watcher: "",
      number: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 20px;
  background: #3620fe;
  color: #fff;
  margin-top: 50px;
}
</style>
