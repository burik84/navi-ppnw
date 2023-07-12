import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../layout/Header';
import { Menu } from '../components/Menu';

export const Map: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <main className="map">
        <h2>Карта сайта</h2>
        <p>В данном разделе схематично представлены разделы сайта.</p>
        <div className="lists">
          <h4>Схемы</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/scheme/pkb">ПКБ</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/elomer">Эломер</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/teplo">Котельная</Link>
            </li>
            <li className="map__item">
              <Link to="/scheme/trial">ЭУ</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>КИП</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/kip/analyzer">Анализаторы</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/pressure">Давление</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/rashod">Расход</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/temp">Температура</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/level">Уровень</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/ibp">ИБП</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/drive">Привода, клапаны</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/equip">Диагностика</Link>
            </li>
            <li className="map__item">
              <Link to="/kip/other">Разное</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>АСУТП</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/asutp/re">Инструкции</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/siemens">Siemens</Link>
            </li>
            <li className="map__item">
              <Link to="/asutp/hart">Hart Modbus RS</Link>
            </li>
          </ul>
        </div>
        <div className="lists">
          <h4>Информация</h4>
          <ul className="map__list">
            <li className="map__item">
              <Link to="/info/otpb">ОТиПБ</Link>
            </li>
            <li className="map__item">
              <Link to="/info/equip">Технологическое инструкции</Link>
            </li>
            <li className="map__item">
              <Link to="/info/map">Технологические схемы</Link>
            </li>
            <li className="map__item">
              <Link to="/info/artical">Статьи</Link>
            </li>
            <li className="map__item">
              <Link to="/info/reglament">Регламенты</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
