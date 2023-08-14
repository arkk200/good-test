import { useEffect, useRef } from "react";

const useTimer = (time: number, onTimeout: () => void) => {
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    timerIdRef.current = setTimeout(() => {
      onTimeout();
    }, time);
  };

  useEffect(() => {
    return () => {
      if (timerIdRef.current) clearTimeout(timerIdRef.current);
    };
  });

  const stop = () => {
    console.log("asdf");
    if (timerIdRef.current) clearTimeout(timerIdRef.current);
  };

  return {
    start,
    stop,
  };
};

export default useTimer;
