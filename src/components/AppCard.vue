<script>
export default {
    props: {
        cardObj: Object
    },

};
</script>

<template>
    <div class="card">
        <img class="rounded-circle" :src="cardObj.image" :alt="cardObj.name">
        <div class="card-body">
            <h3 class="text-center ">{{ cardObj.name }}</h3>
            <h6 class="text-center m-0">{{ cardObj.status }}</h6>
            <h6 class="text-center">{{ cardObj.species }}</h6>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    border: 0;
    background-color: transparent;
}
</style>