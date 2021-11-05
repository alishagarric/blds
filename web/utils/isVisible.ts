/**
 *
 * isVisible.ts
 * @description Dead simple function to know if something is in the viewport
 * @example https://stackoverflow.com/a/65008608/13364822
 *
 */

import { useEffect, useState } from "react";

export function isVisible(ref: React.RefObject<any>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export function percentIsVisible(
  ref: React.RefObject<any>,
  percentVisible: number
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log([entry]);

      if (entry.intersectionRatio > percentVisible) {
        setIntersecting(true);
      } else {
        setIntersecting(true);
      }
    });

    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
