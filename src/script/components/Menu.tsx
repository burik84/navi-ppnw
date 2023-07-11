import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AppContextSource } from '../services/AppContext';

const shemes = [
  ['/scheme/sug', 'СУГ'],
  ['/scheme/us', 'УС'],
  ['/scheme/uhb', 'УХБ'],
  ['/scheme/ith', 'ИТХ'],
  ['/scheme/ups', 'УПС'],
  ['/scheme/ahz', 'АХЗ'],
  ['/scheme/other', 'Вспомогательная'],
  ['/scheme/ais', 'АИС'],
  ['/scheme/aov', 'АОВ'],
  ['/scheme/rotork', 'Петли. Rotork'],
  ['/scheme/sgoes', 'Петли. СГОЭС'],
];

const uku = [
  ['/uku/44_1', '44.1'],
  ['/uku/44_2', '44.2'],
  ['/uku/44_3', '44.3'],
  ['/uku/700_3', '700.3'],
  ['/uku/ppu', 'ППУ'],
  ['/uku/instruction', 'Инструкции и методики проверки'],
];

const kip = [
  ['/kip/analyzer', 'Анализаторы'],
  ['/kip/pressure', 'Давление'],
  ['/kip/rashod', 'Расход'],
  ['/kip/temp', 'Температура'],
  ['/kip/level', 'Уровень'],
  ['/kip/modul', 'Барьеры Модули AI/DI/DO'],
  ['/kip/ibp', 'ИБП'],
  ['/kip/drive', 'Привода, клапаны'],
  ['/kip/enraf', 'Enraf'],
  ['/kip/equip', 'Диагностика'],
  ['/kip/other', 'Разное'],
];
const asutp = [
  ['/asutp/re', 'Инструкции'],
  ['/asutp/centum', 'Centum VP'],
  ['/asutp/prosafe', 'Prosafe RS'],
  ['/asutp/server', "Server's"],
  ['/asutp/siemens', 'Siemens'],
  ['/asutp/stardom', 'Stardom'],
  ['/asutp/hart', 'Hart Modbus RS'],
  ['/asutp/scada', 'Scada'],
  ['/asutp/enraf', 'Enraf'],
  ['/asutp/smis', 'СМИС'],
  ['/asutp/basis', 'Базис'],
];

const info = [
  ['/info/otpb', 'ОТ, ПБ'],
  ['/info/equip', 'Технологическое оборудование, инструкции'],
  ['/info/methodologies', 'Методики проверки'],
  ['/info/map', 'Схемы технологические, карта площадки'],
  ['/info/artic', 'Статьи'],
  ['/info/reglament', 'Регламенты'],
];

const useCurrentRoute = () => {
  // const { path, url } = useMatch();
  const location = useLocation();
  const names = ['sheme', 'uku', 'kip', 'asutp', 'info'];
  let result = names[0];
  // names.forEach((item) => {
  //   if (url.search(item) !== -1) {
  //     result = item;
  //   }
  // });
  console.log(location);
  return result;
};

const listItems = (name: string) => {
  let lists;
  switch (name) {
    case 'uku':
      lists = uku.map((item) => (
        <li key={item[0]}>
          <NavLink to={item[0]} className={({ isActive }) => "menu__link" + (isActive ? " active" : "")}>
            {item[1]}
          </NavLink>
        </li>
      ));
      break;
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
      lists = shemes.map((item) => (
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
