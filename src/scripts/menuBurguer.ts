import { eventEmmit } from "./event";

const openMenuBurguerEventName = "openMenuBurguer";
const closeMenuBurguerEventName = "closeMenuBurguer";

export default class MenuBurguer {
  static open() {
    eventEmmit(openMenuBurguerEventName);
  }

  static close() {
    eventEmmit(closeMenuBurguerEventName);
  }

  static onOpen(action: () => void) {
    document.addEventListener(openMenuBurguerEventName, action);
  }

  static onClose(action: () => void) {
    document.addEventListener(closeMenuBurguerEventName, action);
  }
}
