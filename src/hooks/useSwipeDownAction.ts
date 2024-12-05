import { useRef } from 'react';

type SwipeHandler = () => void;

const useSwipeDownAction = (swipeHandler: SwipeHandler) => {
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    if (touchStartY.current < touchEndY.current - 50) {
      swipeHandler(); // 스와이프 다운으로 판단되면 핸들러 실행
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.touches[0].clientY;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

export default useSwipeDownAction;
