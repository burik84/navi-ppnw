import { useState, useEffect } from 'react';

interface WindowDimensions {
  // height: number;
  height: any;
}

const getWindowDimensions = (): WindowDimensions => {
  const { innerHeight: height } = window;

  return {
    height,
  };
};

const getWindowDimensionsScroll = (): WindowDimensions => {
  const { scrollY: height } = window;

  return {
    height,
  };
};

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
};

export const useHandleScroll = (): WindowDimensions => {
  const [scrollY, getScrollY] = useState<WindowDimensions>(0);

  useEffect(() => {
    const handleScroll = () => {
      getScrollY(getWindowDimensionsScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};
