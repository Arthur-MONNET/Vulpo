export default defineNuxtPlugin(() => {
    if (process.server) return
    const config = useRuntimeConfig()
    console.log(config.public)
    // Établir la connexion WebSocket avec le serveur
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "wss";
    console.log(`${wsProtocol}://${config.public.WS_HOST}`)
    const ws = new WebSocket(`${wsProtocol}://${config.public.WS_HOST}`);
    console.log(ws)
    return {
        provide: {ws}
    }
})