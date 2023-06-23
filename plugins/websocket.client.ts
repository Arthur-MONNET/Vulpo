export default defineNuxtPlugin(() => {
    if (process.server) return
    const config = useRuntimeConfig()
    console.log(config.public)
    // Établir la connexion WebSocket avec le serveur
    const wsProtocol = window.location.protocol === "https:" ? "wss" : "wss";
    const ws = new WebSocket(`${wsProtocol}://${config.public.WS_HOST.replace("http://", "").replace("https://", "")}:${config.public.WS_PORT}`);
    return {
        provide: {ws}
    }
})