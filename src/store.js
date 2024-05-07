import { reactive } from "vue";

export const store = reactive ({
    status: ["All","Alive", "Dead", "unknown"],
    selectedStatus: "All",
})