import { eventEmmit } from "./utils"

const openCardEventName = "openCard"
const closeCardEventName = "closeCard"

export default class CookieCard {
    static open() {
        eventEmmit(openCardEventName)
    }

    static close() {
        eventEmmit(closeCardEventName)
    }

    static onOpen(action: () => void) {
        document.addEventListener(openCardEventName, action)
    }

    static onClose(action: () => void) {
        document.addEventListener(closeCardEventName, action)
    }
}