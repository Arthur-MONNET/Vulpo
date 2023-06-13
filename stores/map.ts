// stores/map.ts

import { defineStore } from "pinia";

export const useMapStore = defineStore({
    id: "map",
    state: () => {
        return {
            map: null as any,
            isUserMarkerCentered: false,
            mapboxgl: null as any,
            markers: [] as any[],
        };
    },
    actions: {
        setMapboxgl(mapboxgl: any) {
            this.mapboxgl = mapboxgl;
        },
        setMap(container: string, style: string, zoom: number) {
            return this.map = new this.mapboxgl.Map({
                container,
                style,
                zoom,
            });
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
                    this.focusOn(location)
                });
            } else {
                marker.getElement().querySelectorAll("svg, i").forEach((element: any) => {
                    element.addEventListener("click", () => {
                        this.focusOn(location)
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
                zoom: 14,
            });
        },
        focusOnByName(name: string) {
            const marker = this.markers.find(marker => marker.name === name);
            if (marker) {
                console.log(marker.location)
                this.focusOn(marker.location);
            }
        },
        setIsUserMarkerCentered() {
            if(this.findMarker("user")) {
                const marker = this.markers.find(marker => marker.name === "user");
                const markerLng = Math.round(marker.location[0] * 1000) / 1000;
                const markerLat = Math.round(marker.location[1] * 1000) / 1000;
                const mapLng = Math.round(this.map.getCenter().lng * 1000) / 1000;
                const mapLat = Math.round(this.map.getCenter().lat * 1000) / 1000;
                if(markerLng === mapLng && markerLat === mapLat) {
                    this.isUserMarkerCentered = true;
                } else {
                    this.isUserMarkerCentered = false;
                }
            } else {
                this.isUserMarkerCentered = false;
            }
        }
    },
    getters: {
        getMap: state => state.map,
        getMapboxgl: state => state.mapboxgl,
        getMarkers: state => state.markers,
        getMarker: state => (name: string) => state.markers.find(marker => marker.name === name)?.marker,
        getIsUserMarkerCentered: state => state.isUserMarkerCentered,
        findMarker: state => (name: string) => !!state.markers.find(marker => marker.name === name),
    },
});