// stores/map.ts

import { set } from "nuxt/dist/app/compat/capi";
import { defineStore } from "pinia";

export const useMapStore = defineStore({
    id: "map",
    state: () => {
        return {
            map: null as any,
            isUserMarkerCentered: false,
            markerCentered: '',
            mapboxgl: null as any,
            markers: [] as any[],
        };
    },
    actions: {
        setMapboxgl(mapboxgl: any) {
            this.mapboxgl = mapboxgl;
        },
        setMap(container: string, style: string, zoom: number) {
            this.markers = [];
            this.map = new this.mapboxgl.Map({
                container,
                style,
                zoom,
                pitchWithRotate: false,
            });
            this.map.dragRotate.disable();

            // disable map rotation using touch rotation gesture
            this.map.touchZoomRotate.disableRotation();
            return this.map;
        },
        removeMarker(name: string) {
            const marker = this.markers.find(marker => marker.name === name);
            if (marker) {
                marker.marker.remove();
                this.markers = this.markers.filter(marker => marker.name !== name);
            }
        },
        addMarker(name: string, location: any, el: any) {
            const marker = new this.mapboxgl.Marker(el)
                .setLngLat(location)
                .addTo(this.map)
            if (name === "user") {
                marker.getElement().addEventListener("click", () => {
                    console.log("click");
                    this.focusOn(location)
                });
            } else if (["zone_Semnoz","animal_blesse","canicule","arbre"].includes(name)) {
                marker.getElement().querySelector("img").addEventListener("click", () => {
                    console.log("click");
                    this.focusOn(location)
                });
            } else {
                marker.getElement().querySelectorAll("svg, i").forEach((element: any) => {
                    element.addEventListener("click", () => {
                        this.focusOn(location);
                    });
                });
            }

            this.markers.push({
                name,
                location,
                marker,
            });
            return marker;
        },
        focusOn(location: any) {
            this.map.flyTo({
                center: location,
                zoom: 13.6,
            });
        },
        focusOnByName(name: string) {
            const marker = this.markers.find(marker => marker.name === name);
            if (marker) {
                this.focusOn(marker.location);
            }
        },
        setIsUserMarkerCentered() {
            if (this.findMarker("user")) {
                const marker = this.markers.find(marker => marker.name === "user");
                const markerLng = Math.round(marker.location[0] * 10000) / 10000;
                const markerLat = Math.round(marker.location[1] * 10000) / 10000;
                const mapLng = Math.round(this.map.getCenter().lng * 10000) / 10000;
                const mapLat = Math.round(this.map.getCenter().lat * 10000) / 10000;
                if (markerLng === mapLng && markerLat === mapLat) {
                    this.isUserMarkerCentered = true;
                } else {
                    this.isUserMarkerCentered = false;
                }
            } else {
                this.isUserMarkerCentered = false;
            }
        },
        setIsMarkerCentered() {
           for (const marker of this.markers) {
               const markerLng = Math.round(marker.location[0] * 10000) / 10000;
               const markerLat = Math.round(marker.location[1] * 10000) / 10000;
               const mapLng = Math.round(this.map.getCenter().lng * 10000) / 10000;
               const mapLat = Math.round(this.map.getCenter().lat * 10000) / 10000;
               if (markerLng === mapLng && markerLat === mapLat) {
                console.log(marker.name);
                   this.markerCentered = marker.name;
                   return;
               }
            }
            this.markerCentered = '';
        },
        
    },
    getters: {
        getMap: state => state.map,
        getMapboxgl: state => state.mapboxgl,
        getMarkers: state => state.markers,
        getMarker: state => (name: string) => state.markers.find(marker => marker.name === name)?.marker,
        getIsUserMarkerCentered: state => state.isUserMarkerCentered,
        getIsMarkerCentered: state => (name: string) => {
            if (state.markerCentered === name) {
                console.log("true");
                return true;
            } else {
                return false;
            }
        },
        findMarker: state => (name: string) => !!state.markers.find(marker => marker.name === name),
    },
});