import React from 'react';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { AppContextSource } from '../services/AppContext';
// import { ButtonInput } from '../components/ButtonInput';

const Lists: React.FC = (): ReactElement => {
  return (
    <ul className="navigation__menu">
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/scheme/" >
          Схемы
        </NavLink>
      </li>
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/uku/">
          УКУ
        </NavLink>
      </li>
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/kip/">
          КИП
        </NavLink>
      </li>
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/asutp/">
          АСУТП
        </NavLink>
      </li>
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/info/">
          Информация
        </NavLink>
      </li>
      <li className="item">
        <NavLink className={({ isActive }) => "link" + (isActive ? " active" : "")} to="/search">
          !Поиск
        </NavLink>
      </li>
    </ul>
  );
};

export const Navigation: React.FC = (): ReactElement => {
  const { isLoad } = AppContextSource();

  return (
    <nav className="navigation">
      {isLoad && <Lists />}
      {/* {!isLoad && <ButtonInput />} */}
    </nav>
  );
};
