export default defineNuxtPlugin(() => {
    if (process.server) return
    const config = useRuntimeConfig()
    console.log(config.public)
    // Établir la connexion WebSocket avec le serveur
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "wss";
    const ws = new WebSocket(`${wsProtocol}://${config.public.WS_HOST}.eu.ngrok.io`);
    return {
        provide: {ws}
    }
})