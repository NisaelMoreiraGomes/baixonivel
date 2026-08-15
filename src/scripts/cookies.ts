import { eventEmmit } from "./utils"

const searchCookieEventName = "searchCookiePermitted"
const analyticsCookieEventName = "analyticsCookiePermitted"
const adsCookieEventName = "adsCookiePermitted"

const adsCookieStorage = "accept-ads-cookies"
const analitycsCookieStorage = "accept-analitycs-cookies"
const searchCookieStorage = "accept-search-cookies"
const hiddenCardCookieStorage = "hidden-cookie-card"

const stringAccept = (value: boolean) => value ? "y" : "n"

export default class Cookies {
    private emitted = {
        ads: false,
        analitycs: false,
        search: false
    }

    set_hidden_card() {
        localStorage.setItem(hiddenCardCookieStorage, "y")
    }

    get_hidden_card() {
        return localStorage.getItem(hiddenCardCookieStorage) === "y"
    }

    get_status() {
        return {
            ads: localStorage.getItem(adsCookieStorage) === "y",
            analitycs: localStorage.getItem(analitycsCookieStorage) === "y",
            search: localStorage.getItem(searchCookieStorage) === "y"
        }
    }

    set_and_emit_status(ads: boolean, analitycs: boolean, search: boolean) {
        this.set_status(ads, analitycs, search)
        this.emit_status(ads, analitycs, search)
    }

    set_status(ads: boolean, analitycs: boolean, search: boolean) {
        localStorage.setItem(adsCookieStorage, stringAccept(ads))
        localStorage.setItem(analitycsCookieStorage, stringAccept(analitycs))
        localStorage.setItem(searchCookieStorage, stringAccept(search))

        this.set_hidden_card()
    }

    emit_status(ads: boolean, analitycs: boolean, search: boolean) {
        if (ads && !this.emitted.ads) {
            this.emitted.ads = true
            eventEmmit(adsCookieEventName)
        }

        if (analitycs && !this.emitted.analitycs) {
            this.emitted.analitycs = true
            eventEmmit(analyticsCookieEventName)
        }

        if (search && !this.emitted.search) {
            this.emitted.search = true
            eventEmmit(searchCookieEventName)
        }
    }

    static onSearchPermitted(action: () => void) {
        document.addEventListener(searchCookieEventName, action)
    }

    static onAnalitycsPermitted(action: () => void) {
        document.addEventListener(analyticsCookieEventName, action)
    }

    static onAdsPermitted(action: () => void) {
        document.addEventListener(adsCookieEventName, action)
    }
}