
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import "mapbox-gl/dist/mapbox-gl.css"

export default defineNuxtPlugin(() => {
    if (process.server) return
    const config = useRuntimeConfig()
    mapboxgl.accessToken = config.public.MAPBOX_TOKEN;

    return {
        provide: {mapboxgl}
    }
})