<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";

export default {
  components: {
    AppHeader,
    CardList,
  },
  data() {
    return {
      cardsArray: [],
      store,
    };
  },
  created() {
    this.isVisible = true,
    axios.get("https://rickandmortyapi.com/api/character")

    .then((resp) => {
      console.log(resp);
      this.cardsArray = resp.data.results;
      this.isVisible = false;
    });
  },
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <div v-if = "isVisible">...Loading</div>
    <CardList :cardsArray = "cardsArray" />
  </div>
</template>

<style lang="scss">
  body{
    background-color: lightgray;
  }
</style>
