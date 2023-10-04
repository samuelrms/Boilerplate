import { useEffect, useState } from 'react';
import { Return } from './useLocalStorage.types';

export const useLocalStorage = (key: string, initial: string): Return => {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ?? initial;
  });

  useEffect(() => {
    const local = window.localStorage.setItem(key, state);
    return local;
  }, [state, key]);

  return [state, setState];
};
