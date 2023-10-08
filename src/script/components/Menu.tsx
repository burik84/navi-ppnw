import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';

const schemes = [
  ['/scheme/pkb', 'ПКБ'],
  ['/scheme/elomer', 'Эломер'],
  ['/scheme/other', 'Общее'],
  ['/scheme/experiment', 'ЭУ'],
];

const kip = [
  ['/kip/analyze', 'Анализаторы'],
  ['/kip/pressure', 'Давление'],
  ['/kip/rashod', 'Расход'],
  ['/kip/temp', 'Температура'],
  ['/kip/level', 'Уровень'],
  ['/kip/modul', 'Барьеры Модули AI/DI/DO'],
  ['/kip/power', 'Электрика'],
  ['/kip/drive', 'Привода, клапаны'],
  ['/kip/equip', 'Диагностика'],
  ['/kip/other', 'Разное'],
];
const asutp = [
  ['/asutp/re', 'Инструкции'],
  ['/asutp/server', "Server's"],
  ['/asutp/siemens', 'Siemens'],
  ['/asutp/hart', 'Hart Modbus RS'],
  ['/asutp/comm', 'Comminaction'],
];

const info = [
  ['/info/otpb', 'ОТ, ПБ'],
  ['/info/equip', 'Технологическое оборудование, инструкции'],
  ['/info/map', 'Схемы технологические, карта площадки'],
  ['/info/artic', 'Статьи'],
  ['/info/reglament', 'Регламенты'],
];

const useCurrentRoute = () => {
  // const { path, url } = useMatch();
  const location = useLocation();
  const names = ['scheme', 'kip', 'asutp', 'info'];
  let result = names[0];
  names.forEach((item) => {

    if (location.pathname.match(item)) {
      result = item;
    }
  });
  return result;
};

const listItems = (name: string) => {
  let lists;
  switch (name) {
    case 'kip':
      lists = kip.map((item) => (
        <li key={item[0]}>
          <NavLink to={item[0]} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>
            {item[1]}
          </NavLink>
        </li>
      ));
      break;
    case 'asutp':
      lists = asutp.map((item) => (
        <li key={item[0]}>
          <NavLink to={item[0]} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>
            {item[1]}
          </NavLink>
        </li>
      ));
      break;
    case 'info':
      lists = info.map((item) => (
        <li key={item[0]}>
          <NavLink to={item[0]} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>
            {item[1]}
          </NavLink>
        </li>
      ));
      break;
    default:
      lists = schemes.map((item) => (
        <li key={item[0]}>
          <NavLink to={item[0]} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>
            {item[1]}
          </NavLink>
        </li>
      ));
      break;
  }
  return lists;
};

export const Menu: React.FC = () => {
  const { isLoad } = AppContextSource();
  const getNameList = useCurrentRoute();
  const listMenu = listItems(getNameList);
  return (
    <nav className="menu">
      <ul>{isLoad && listMenu}</ul>
    </nav>
  );
};
