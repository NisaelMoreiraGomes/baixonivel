import { eventEmmit } from "./event";

const openSearchrEventName = "openSearch";
const closeSearchEventName = "closeSearch";

export default class Search {
  static open() {
    eventEmmit(openSearchrEventName);
  }

  static close() {
    eventEmmit(closeSearchEventName);
  }

  static onOpen(action: () => void) {
    document.addEventListener(openSearchrEventName, action);
  }

  static onClose(action: () => void) {
    document.addEventListener(closeSearchEventName, action);
  }
}
