<script>
import {store} from "../store.js";
export default {
    data (){
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container py-5">
        <select @change = "$emit('filter')" v-model = "store.selectedStatus">
            <option  v-for ="condition in store.status">
                {{ condition }}
            </option>
        </select>
    </div>
</template>

<style scoped>
</style>