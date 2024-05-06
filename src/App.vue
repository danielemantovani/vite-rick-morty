<script>

import axios from 'axios';

  export default {
    components:{

    },

    data (){
      
    },

    created (){
      axios
        .get ("https://rickandmortyapi.com/api/character")
        .then ((resp) =>{
          console.log (resp)
        })
    }
  }
</script>

<template>

</template>

<style lang="scss">

</style>
