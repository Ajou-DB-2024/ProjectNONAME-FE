import { useState, useRef, useEffect } from 'react';

const useDelayState = <T>(initialValue: T): [T, (value: T, delay: number) => void] => {
  const [state, setState] = useState(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setDelayedState = (value: T, delay: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존 타이머 클리어
    }

    timeoutRef.current = setTimeout(() => {
      setState(value);
      timeoutRef.current = null; // 타이머 초기화
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // 컴포넌트 언마운트 시 타이머 클리어
      }
    };
  }, []);

  return [state, setDelayedState];
};

export default useDelayState;
