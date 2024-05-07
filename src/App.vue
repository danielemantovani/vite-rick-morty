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
      isVisible: false,
    };
  },
  created() {
    axios.get ("https://rickandmortyapi.com/api/character")
    .then ((resp)=> {
      this.store.listCard= resp.data.results;
      this.getCards();
      // this.cardsArray= this.store.listCard;
    })
  },
  
  methods:{
    // getCards (){
    //   this.isVisible = true;
    //   console.log(this.store.selectedStatus);
    //   //creazione paramentri per la chiamata axios
    //   const paramsObj = {
    //   }
    //   if(this.store.selectedStatus !== "All" ){
    //       paramsObj.status = this.store.selectedStatus;
    //   }
    //   axios.get ("https://rickandmortyapi.com/api/character",{
    //     params: paramsObj
    //   })
    //   .then ((resp) =>{
    //     this.cardsArray = resp.data.results;
    //     this.isVisible = false;
    //   })
    // },

    //al cambiamento del select (figlio) all'interno del componente appSearch (Genitore) invoco la funzione in 
    getCards (){
      //reset per cancellare gli elementi della ricerca precedente all'interno dell'array
      this.cardsArray = [];
      // se la selezione non è impostata su all ciclo gli elementi dell'array e confronto lo status selezionato con l'elemento corrente, se i due combaciano li pusherà all'interno dell'array cardList
      if (this.store.selectedStatus !== "All"){
        this.store.listCard.forEach (curElem => {
          if (curElem.status === this.store.selectedStatus){
            this.cardsArray.push(curElem);
          }
        });
      } else {
        this.cardsArray = this.store.listCard;
      }
      this.store.counter = this.cardsArray.length;
    },
  }
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <!-- tramite l'etichetta filter assegnata al figlio AppVue (il genitore) percepisce il cambio di valore -->
    <AppSearch 
    @filter="getCards"
    />
    <div v-if = "isVisible">...Loading</div>
    <CardList v-else :cardsArray = "cardsArray" />
  </div>
</template>

<style lang="scss">
  body{
    background-color: lightgray;
  }
</style>
