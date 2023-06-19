// popup.ts

import { defineStore } from "pinia";

export const usePopupStore = defineStore({
    id: "popup",
    state: () => {
        return {
            popups: {} as any,
            data : {} as any,
        };
    },
    actions: {
        addPopup(popup: any, defaultState: boolean = false, data: any = null) {
            this.popups[popup] = defaultState
            this.data[popup] = data
        },
        openPopup(popupName: string, data: any = null) {
            console.log("openPopup", popupName, data);
            this.popups[popupName] = true;
            this.data[popupName] = data;
        },
        closePopup(popupName: string) {
            console.log("closePopup", popupName);
            this.popups[popupName] = false;
        },
        closeAllPopups() {
            Object.keys(this.popups).forEach(popupName => this.closePopup(popupName));
        },
        closeAllPopupsExcept(popupName: string) {
            Object.keys(this.popups).forEach(popup => {
                if (popup !== popupName) {
                    this.closePopup(popup)
                }
            });
        }
    },
    getters: {
        getPopups: state => state.popups,
        getData: state => (popupName: string) => state.data[popupName],
        isPopupOpen: state => (popupName: string) => state.popups[popupName],
    },
});