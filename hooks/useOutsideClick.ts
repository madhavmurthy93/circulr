import { useEffect } from "react";

export function useOutsideClick(
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void,
  listenCapturing: boolean = true,
  shouldPreventDefault: () => boolean = () => false
): void {
  useEffect(() => {
    function handleClick(e: MouseEvent): void {
      if (
        refs.every(
          (ref) => ref.current && !ref.current.contains(e.target as Node)
        )
      ) {
        if (shouldPreventDefault()) {
          e.preventDefault();
        }
        callback();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [refs, callback, listenCapturing, shouldPreventDefault]);
}
