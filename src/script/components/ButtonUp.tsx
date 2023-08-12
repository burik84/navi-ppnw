import React from 'react';
import {useState} from 'react';

import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// import { useWindowDimensions, useHandleScroll } from '../services/WindowDimensions';

export const ButtonUp: React.FC = () => {
  // const { height } = useWindowDimensions();
  // const scrollY = useHandleScroll();

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="absolute">
      <IconButton
        className={visible ? 'button button__up active' : 'button button__up'}
        aria-label="наверх"
        onClick={handleUp}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </div>
  );
};
