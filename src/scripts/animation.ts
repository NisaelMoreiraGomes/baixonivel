export const animation = {
  start(
    animName: string,
    element: Element | null,
    removeAnimationOnEnd = true,
  ) {
    element?.classList.remove("hidden");
    element?.classList.add(animName);

    removeAnimationOnEnd && animation.onEnd(element);
  },

  end(animName: string, element: Element | null, hiddenOnEnd = true) {
    element?.classList.add(animName);

    hiddenOnEnd && animation.onEnd(element);
  },

  onEnd(element: Element | null) {
    element?.addEventListener("animationend", (e: Event) => {
      const animName = (e as AnimationEvent).animationName;

      element.classList.remove(animName);

      if (animName.startsWith("desappear")) {
        element.classList.add("hidden");
      }
    });
  },
};
