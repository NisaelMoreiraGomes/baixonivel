import { eventEmmit, eventListen } from "./event";

const searchCookiePermittedEventName = "searchCookiePermitted";
const searchCookieDeniedEventName = "searchCookieDenied";
const analyticsCookieEventName = "analyticsCookiePermitted";
const adsCookieEventName = "adsCookiePermitted";

const adsCookieStorage = "accept-ads-cookies";
const analitycsCookieStorage = "accept-analitycs-cookies";
const searchCookieStorage = "accept-search-cookies";
const hiddenCardCookieStorage = "cookies-version";

const stringAccept = (value: boolean) => (value ? "y" : "n");

type CookiesStatus = {
  ads: boolean;
  analitycs: boolean;
  search: boolean;
};

export default class Cookies {
  private static emitted = {
    ads: false,
    analitycs: false,
  };

  private expectedVersion: string;

  constructor(expectedVersion: string) {
    this.expectedVersion = expectedVersion;
  }

  set_hidden_card() {
    localStorage.setItem(hiddenCardCookieStorage, this.expectedVersion);
  }

  get_hidden_card() {
    return (
      localStorage.getItem(hiddenCardCookieStorage) === this.expectedVersion
    );
  }

  get_status(): CookiesStatus {
    return {
      ads: localStorage.getItem(adsCookieStorage) === "y",
      analitycs: localStorage.getItem(analitycsCookieStorage) === "y",
      search: localStorage.getItem(searchCookieStorage) === "y",
    };
  }

  set_and_emit_status(status: CookiesStatus) {
    this.set_status(status);
    this.emit_status(status);
  }

  set_status(status: CookiesStatus) {
    localStorage.setItem(adsCookieStorage, stringAccept(status.ads));
    localStorage.setItem(
      analitycsCookieStorage,
      stringAccept(status.analitycs),
    );
    localStorage.setItem(searchCookieStorage, stringAccept(status.search));

    this.set_hidden_card();
  }

  emit_status(status: CookiesStatus) {
    if (status.ads && !Cookies.emitted.ads) {
      Cookies.emitted.ads = true;
      eventEmmit(adsCookieEventName);
    }

    if (status.analitycs && !Cookies.emitted.analitycs) {
      Cookies.emitted.analitycs = true;
      eventEmmit(analyticsCookieEventName);
    }

    if (status.search) {
      eventEmmit(searchCookiePermittedEventName);
    } else {
      eventEmmit(searchCookieDeniedEventName);
    }
  }

  static onSearchPermitted(action: () => void) {
    eventListen(searchCookiePermittedEventName, action);
  }

  static onSearchDenied(action: () => void) {
    eventListen(searchCookieDeniedEventName, action);
  }

  static onAnalitycsPermitted(action: () => void) {
    eventListen(analyticsCookieEventName, action);
  }

  static onAdsPermitted(action: () => void) {
    eventListen(adsCookieEventName, action);
  }
}
