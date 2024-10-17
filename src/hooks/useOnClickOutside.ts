import { RefObject, useEffect } from "react";

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  handler: () => void,
): void {
  useEffect(() => {
    const listener = (event: Event) => {
      const target = refs.find(ref => !ref.current || ref.current.contains(event.target as T));
      if (target) return;
      handler();
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [refs, handler]);
}

export default useOnClickOutside;
