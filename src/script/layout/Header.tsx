import React,  { useEffect } from 'react';


import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { LogoElement } from '../shared/svgElements';

export const Header: React.FC = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log('Current location header is ', location);
  // }, [location]);

  return (
    <header className="header">
      <Link className="link" to="/main">
        <LogoElement color="white" />
        <h1>Navi</h1>
      </Link>
      <span>... ваш помощник по КИП и АСУТП</span>
      <Navigation />
    </header>
  );
};
