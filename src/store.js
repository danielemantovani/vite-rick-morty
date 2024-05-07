import { reactive } from "vue";

export const store = reactive ({
    //selezioni disponibili dall'utente
    status: ["All","Alive", "Dead", "unknown"],
    //selezione di default all'avvio della pagina, che successivamente verrà modifica alla selezione dell'utente
    selectedStatus: "All",
    //array che viene riempito all'avvio della pagina con le card tramite chiamata API
    listCard: [],
    //contatore delle card visualizzate in base ai filtri impostati dall'utente
    counter: 0,
})