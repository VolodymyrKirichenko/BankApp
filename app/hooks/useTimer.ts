import { useEffect } from 'react';

interface Options {
  isClicked: boolean,
  setIsClicked: (value: boolean) => void,
  delay: number,
}

export const useTimer = (options: Options) => {
  const { setIsClicked, isClicked, delay } = options;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [delay, isClicked, setIsClicked]);
};
