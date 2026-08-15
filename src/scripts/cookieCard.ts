import { eventEmmit } from "./event"

type OpenCardEvent = CustomEvent<{
    loadState: boolean
}>

const openCardEventName = "openCookieCard"
const closeCardEventName = "closeCookieCard"

export default class CookieCard {
    static open(loadState = true) {
        eventEmmit(openCardEventName, { loadState })
    }

    static close() {
        eventEmmit(closeCardEventName)
    }

    static onOpen(action: (event: OpenCardEvent) => void) {
        document.addEventListener(openCardEventName, action as EventListener)
    }

    static onClose(action: () => void) {
        document.addEventListener(closeCardEventName, action)
    }
}