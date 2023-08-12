import React from 'react';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useWindowDimensions, useHandleScroll } from '../services/WindowDimensions';

export const ButtonUp: React.FC = () => {
  const { height } = useWindowDimensions();
  const scrollY = useHandleScroll();

  const handleUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="absolute">
      <IconButton
        className={scrollY >= 10 ? 'button button__up active' : 'button button__up'}
        aria-label="наверх"
        onClick={handleUp}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </div>
  );
};
