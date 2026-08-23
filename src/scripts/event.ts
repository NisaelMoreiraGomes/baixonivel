export const eventEmmit = (name: string, detail = {}) =>
  document.dispatchEvent(new CustomEvent(name, { detail }));
export const eventListen = (name: string, action: (event?: Event) => void) => {
  document.addEventListener(name, action);
};
