// store/alerts.ts
import { defineStore } from "pinia";

export const useMenuStore = defineStore({
    id: "menu",
    state: () => {
        return {
            list: [
                {
                    id: 1,
                    title: "Light mode",
                    target: "light-mode"
                },
                {
                    id: 2,
                    title: "Langue",
                    target: "language"
                },
                {
                    id: 3,
                    title: "Aide",
                    target: "help"
                },
            ]
        }
    },
    actions: {
    },
    getters: {
        getMenu: state => state.list,
    },
});
