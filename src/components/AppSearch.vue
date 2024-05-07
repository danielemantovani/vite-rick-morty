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
        <div class="d-flex justify-content-between">
            <div>
                <!--change fa percepire il cambio dell'opzione tramite la sua etichetta (filter) quando la componente viene utilizzata,permette al genitore di capire il cambio di valore del figlio  -->
                <!-- con v-model collego la variabile selectStatus -->
                <select @change = "$emit('filter')" v-model = "store.selectedStatus">
                    <option  v-for ="condition in store.status">
                        {{ condition }}
                    </option>
                </select>
            </div>
            <div>
                <p>Elementi trovati: <span class="fw-bold">{{ store.counter }}</span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>