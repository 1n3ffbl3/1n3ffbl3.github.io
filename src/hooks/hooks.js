import { useEffect } from 'react';

/**
 * Author of this code is GitHub user @maximakymenko
 * Repository: https://github.com/maximakymenko/react-burger-menu-article-app
 */
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
          return;
      }

      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
    }, [ref, handler],
  );
};