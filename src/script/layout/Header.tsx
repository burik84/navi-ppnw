import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/icons/bandcamp-brands.svg';
import { Navigation } from '../components/Navigation';
import { LogoElement } from '../shared/svgElements';

export const Header: React.FC = () => {
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
