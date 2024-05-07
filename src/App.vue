<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import CardList from "./components/CardList.vue";
import AppSearch from "./components/AppSearch.vue";

export default {
  components: {
    AppHeader,
    CardList,
    AppSearch,
  },
  data() {
    return {
      cardsArray: [],
      store,
    };
  },
  created() {
    this.getCards();
  },
  
  methods:{
    getCards (){
      this.isVisible = true;
      console.log(this.store.selectedStatus);
      //creazione paramentri per la chiamata axios
      const paramsObj = {
      }
      if(this.store.selectedStatus !== "All" ){
          paramsObj.status = this.store.selectedStatus;
      }
      axios.get ("https://rickandmortyapi.com/api/character",{
        params: paramsObj
      })
      .then ((resp) =>{
        this.cardsArray = resp.data.results;
        this.isVisible = false;
      })
    },
  }
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <AppSearch 
    @filter="getCards"
    />
    <div v-if = "isVisible">...Loading</div>
    <CardList :cardsArray = "cardsArray" />
  </div>
</template>

<style lang="scss">
  body{
    background-color: lightgray;
  }
</style>
