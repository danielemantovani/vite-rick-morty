<script>
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
    };
  },
  created() {
    axios.get("https://rickandmortyapi.com/api/character")

    .then((resp) => {
      console.log(resp);
      this.cardsArray = resp.data.results;
    });
  },
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <CardList :cardsArray = "cardsArray" />
  </div>
</template>

<style lang="scss">
  body{
    background-color: lightgray;
  }
</style>
