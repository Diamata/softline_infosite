import React, {useLayoutEffect, useState} from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0)
  const updateWindowSize = () => {
    setWindowSize(window.innerWidth)
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  },[])
  return windowSize
}