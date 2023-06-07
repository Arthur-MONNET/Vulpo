// store/user.ts
import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user",
    state: () => {
        return {
            id: 0,
            location: {
                lat: 0,
                lng: 0,
            },
            marker: null as any,
        };
    },
    actions: {
        setLocation(location: any) {
            this.location = location;
        },
        generateMarker(mapboxgl: any, map: any) {
            this.marker?.remove();

            const el = document.createElement("div");
            el.className = "user-marker";

            this.marker = new mapboxgl.Marker(el)
                .setLngLat(this.getLocationAsArray)
                .addTo(map);
        },
    },
    getters: {
        getLocation: state => state.location,
        getLocationAsArray: state => [state.location.lng, state.location.lat],
        getMarker: state => state.marker,
        getId: state => state.id,
    },
});
