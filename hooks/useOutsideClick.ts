import { RefObject, useEffect } from "react";

/**
 * Outside Click Callback Hook
 * @param ref
 * @param callback
 */
export default function useOutSideClick(
  ref: RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Element)) {
        callback();
      }
    };

    document.addEventListener("click", (e) => handleClickOutside(e));

    return () => {
      document.removeEventListener("click", (e) => handleClickOutside(e));
    };
  }, [callback, ref]);
}
