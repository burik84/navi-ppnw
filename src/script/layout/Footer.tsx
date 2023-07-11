import React from 'react';

import CopyrightIcon from '@mui/icons-material/Copyright';

import { LogoElement, LogoGithub } from '../shared/svgElements';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="list">
        <li className="item">
          <Link className="link" to="/main">
            <LogoElement color="white" />
            Главная
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/about">
            О проекте
          </Link>
        </li>
        <li className="item">
          <Link className="link" to="/map">
            Карта сайта
          </Link>
        </li>
      </ul>
      <div className="footer__author">
        <p>
          Идея проекта, дизайн и реализация <a href="mailto:burikAV@yandex.ru">burikAV</a>
        </p>
        <p>
          Версия 0.01.01 от 01 августа 2023. <CopyrightIcon color="primary" /> 2023.{' '}
        </p>
      </div>
      <a className="footer__link" href="https://github.com/burik84/navi-ppnw/tree/ver1" target="_blank" rel="noreferrer">
        <LogoGithub color="white" />
        Проект
      </a>
    </footer>
  );
};
