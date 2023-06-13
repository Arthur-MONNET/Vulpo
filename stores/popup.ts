// popup.ts

import { defineStore } from "pinia";

export const usePopupStore = defineStore({
    id: "popup",
    state: () => {
        return {
            popups: {} as any,
        };
    },
    actions: {
        addPopup(popup: any, defaultState: boolean = false) {
            this.popups[popup] = defaultState
        },
        openPopup(popupName: string) {
            this.popups[popupName] = true;
        },
        closePopup(popupName: string) {
            console.log("CLOSE POPUP : ", popupName)
            this.popups[popupName] = false;
        },
        closeAllPopups() {
            Object.keys(this.popups).forEach(popupName => this.closePopup(popupName));
        },
        closeAllPopupsExcept(popupName: string) {
            Object.keys(this.popups).forEach(popup => {
                console.log(popup, popupName)
                if (popup !== popupName) {
                    this.closePopup(popup)
                }
            });
            console.log(this.isPopupOpen(popupName))
        }
    },
    getters: {
        getPopups: state => state.popups,
        isPopupOpen: state => (popupName: string) => state.popups[popupName],
    },
});